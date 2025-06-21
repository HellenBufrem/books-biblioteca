document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('cadastroForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('password').value;
    const confirmarSenha = document.getElementById('confirmPassword').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const termosAceitos = document.getElementById('termsCheck').checked;

    // Validações 
    if (!nome || !username || !email || !senha || !confirmarSenha || !dataNascimento) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    if (!termosAceitos) {
      alert("Você deve aceitar os termos de uso e política de privacidade.");
      return;
    }

    // objeto de usuário
    const usuario = {
      nome,
      username,
      email,
      senha,
      dataNascimento
    };

    // Salvar no localStorage
    localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));

    // Confirmação e redirecionamento
    alert("Cadastro realizado com sucesso!");
    window.location.href = "/books-biblioteca/pages/pagina-login/login.html";
  });
});
