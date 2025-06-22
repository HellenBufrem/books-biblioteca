document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validarSenhaForte = (senha) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(senha);

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

  // Validação em tempo real
  [email, password].forEach((campo) => {
    campo.addEventListener("input", () => limparErro(campo));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let valido = true;
    limparErro(email);
    limparErro(password);

    if (!validarEmail(email.value.trim())) {
      mostrarErro(email, "Email inválido.");
      valido = false;
    }

    if (!validarSenhaForte(password.value)) {
      mostrarErro(password, "Senha fraca. Use ao menos 8 caracteres, incluindo letra maiúscula, minúscula, número e símbolo.");
      valido = false;
    }

    if (!valido) return;

    try {
      const resposta = await fetch("http://localhost:3000/usuarios");
      const usuarios = await resposta.json();

      const usuarioEncontrado = usuarios.find(user =>
        user.email === email.value.trim() && user.senha === password.value
      );

      if (usuarioEncontrado) {
        const modal = new bootstrap.Modal(document.getElementById("loginModal"));
        document.getElementById("modalTitle").textContent = "🎉 Login realizado";
        document.getElementById("modalBody").innerHTML = `
          <p>Bem-vindo(a), <strong>${usuarioEncontrado.nome}</strong>!</p>
          <p>Você será redirecionado para a estante...</p>
        `;
        modal.show();

        setTimeout(() => {
          modal.hide();
          window.location.href = "/pages/pagina-estante/estante.html";
        }, 2500);
      } else {
        mostrarErro(email, "Email ou senha inválidos.");
        mostrarErro(password, "Email ou senha inválidos.");
      }

    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
      alert("Erro ao tentar fazer login. Tente novamente.");
    }
  });
});
