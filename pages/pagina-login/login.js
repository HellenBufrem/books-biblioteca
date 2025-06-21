document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailDigitado = document.getElementById('email').value.trim();
    const senhaDigitada = document.getElementById('password').value;

    // Recuperar dados do usuário armazenado
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuarioCadastrado'));

    if (!usuarioSalvo) {
      alert("Nenhum usuário cadastrado encontrado.");
      return;
    }

    if (emailDigitado === usuarioSalvo.email && senhaDigitada === usuarioSalvo.senha) {
      // Login bem-sucedido
      alert("Login realizado com sucesso!");
      window.location.href = "/books-biblioteca/pages/pagina-estante/estante.html";
    } else {
      alert("Email ou senha incorretos.");
    }
  });
});
