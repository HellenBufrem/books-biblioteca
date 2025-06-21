function gerarEstrelas(avaliacao) {
  let estrelasHTML = "";
  const inteiras = Math.floor(avaliacao);
  const meia = avaliacao % 1 >= 0.5;
  const vazias = 5 - inteiras - (meia ? 1 : 0);

  for (let i = 0; i < inteiras; i++) estrelasHTML += `<i class="fas fa-star"></i>`;
  if (meia) estrelasHTML += `<i class="fas fa-star-half-alt"></i>`;
  for (let i = 0; i < vazias; i++) estrelasHTML += `<i class="far fa-star"></i>`;

  return estrelasHTML;
}

async function renderizarEstante() {
  const container = document.getElementById("livrosContainer");
  if (!container) return;

  try {
    const resposta = await fetch("http://localhost:3000/livros");
    const livros = await resposta.json();

    container.innerHTML = "";

    livros.forEach((livro) => {
      const card = document.createElement("div");
      card.className = "col-md-4 col-lg-3 mb-4";

      card.innerHTML = `
        <div class="book-card">
          <img src="${livro.imagem}" alt="Capa do livro ${livro.titulo}" class="book-cover">
          <div class="book-info">
            <h3 class="book-title">${livro.titulo}</h3>
            <p class="book-author">${livro.autor}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="book-rating">${gerarEstrelas(livro.avaliacao)}</div>
              <small class="text-muted">Lido em: ${livro.dataLeitura}</small>
            </div>
            <div class="mt-3 d-flex justify-content-between">
              <button class="btn btn-sm btn-outline-primary">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-sm btn-outline-danger">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    console.error("Erro ao carregar livros da estante:", err);
    container.innerHTML = `<p class="text-danger">Erro ao carregar livros. Verifique o servidor JSON.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", renderizarEstante);
