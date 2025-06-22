document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");

  const nome = document.getElementById("nome");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const dataNascimento = document.getElementById("dataNascimento");

  const mostrarErro = (input, mensagem) => {
    input.classList.add("is-invalid");
    let feedback = input.nextElementSibling;
    if (!feedback || !feedback.classList.contains("invalid-feedback")) {
      feedback = document.createElement("div");
      feedback.className = "invalid-feedback";
      input.after(feedback);
    }
    feedback.textContent = mensagem;
  };

  const limparErro = (input) => {
    input.classList.remove("is-invalid");
    const feedback = input.nextElementSibling;
    if (feedback && feedback.classList.contains("invalid-feedback")) {
      feedback.textContent = "";
    }
  };

  const validarEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validarSenhaForte = (senha) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(senha);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let valido = true;

    [nome, username, email, password, confirmPassword, dataNascimento].forEach(limparErro);

    if (!nome.value.trim()) {
      mostrarErro(nome, "Informe o nome completo.");
      valido = false;
    }

    if (!username.value.trim()) {
      mostrarErro(username, "Informe um nome de usuário.");
      valido = false;
    }

    if (!validarEmail(email.value.trim())) {
      mostrarErro(email, "Email inválido.");
      valido = false;
    }

    if (!validarSenhaForte(password.value)) {
      mostrarErro(password, "A senha deve ter pelo menos 8 caracteres, incluindo maiúscula, minúscula, número e símbolo.");
      valido = false;
    }

    if (confirmPassword.value !== password.value) {
      mostrarErro(confirmPassword, "As senhas não coincidem.");
      valido = false;
    }

    if (!dataNascimento.value) {
      mostrarErro(dataNascimento, "Informe sua data de nascimento.");
      valido = false;
    }

    if (!valido) return;

    const novoUsuario = {
      nome: nome.value.trim(),
      username: username.value.trim(),
      email: email.value.trim(),
      senha: password.value.trim(),
      dataNascimento: dataNascimento.value
    };

    try {
      const resposta = await fetch("http://localhost:3000/usuarios");
      const usuarios = await resposta.json();

      const jaExiste = usuarios.find(u => u.email === novoUsuario.email);
      if (jaExiste) {
        mostrarErro(email, "Este email já está cadastrado.");
        return;
      }

      const cadastro = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario)
      });

      if (!cadastro.ok) throw new Error("Erro ao cadastrar usuário.");

      // ✅ Redirecionamento direto para a tela de login
      window.location.href = "/books-biblioteca/pages/pagina-login/login.html";

    } catch (err) {
      console.error("Erro ao cadastrar:", err);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  });

  const validarCampo = (input) => {
    limparErro(input);

    switch (input.id) {
      case "nome":
      case "username":
        if (!input.value.trim()) mostrarErro(input, "Este campo é obrigatório.");
        break;
      case "email":
        if (!validarEmail(input.value.trim())) mostrarErro(input, "Email inválido.");
        break;
      case "password":
        if (!validarSenhaForte(input.value)) mostrarErro(input, "A senha deve ter pelo menos 8 caracteres, incluindo maiúscula, minúscula, número e símbolo.");
        break;
      case "confirmPassword":
        if (input.value !== password.value) mostrarErro(input, "As senhas não coincidem.");
        break;
      case "dataNascimento":
        if (!input.value) mostrarErro(input, "Informe sua data de nascimento.");
        break;
    }
  };

  [nome, username, email, password, confirmPassword, dataNascimento].forEach((input) => {
    input.addEventListener("input", () => validarCampo(input));
  });
});
