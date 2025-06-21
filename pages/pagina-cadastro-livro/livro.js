document.getElementById("cadastroLivroForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const titulo = document.getElementById("tituloLivro").value.trim();
  const autor = document.getElementById("autorLivro").value.trim();
  const genero = document.getElementById("generoLivro").value;
  const avaliacao = document.querySelector('input[name="avaliacao"]:checked')?.value;
  const comentario = document.getElementById("comentarioLivro").value.trim();
  const imagem = document.getElementById("imagemLivro").value;
  const dataInput = document.getElementById("dataLeitura").value;
  const data = new Date(dataInput);
  const dataLeitura = data.toLocaleDateString("pt-BR");

  if (!titulo || !autor || !genero || !dataLeitura || !avaliacao) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  const novoLivro = {
    titulo,
    autor,
    genero,
    dataLeitura,
    avaliacao: parseInt(avaliacao),
    comentario,
    imagem
  };

  try {
    await fetch("http://localhost:3000/livros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoLivro)
    });
    window.location.href = "/books-biblioteca/pages/pagina-estante/estante.html";
  } catch (err) {
    console.error("Erro ao salvar livro:", err);
    alert("Erro ao cadastrar livro.");
  }
});
