document.addEventListener("DOMContentLoaded", () => {
  const destaque = [
    {
      titulo: "Relatos de um gato viajante",
      autor: "Hiro Arikawa",
      editora: "Alfaguara",
      imagem: "https://res.cloudinary.com/dnatxacxq/image/upload/v1749944852/81a9krs52mL._SY342__ffr3el.jpg"
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      editora: "Companhia das Letras",
      imagem: "https://res.cloudinary.com/dnatxacxq/image/upload/v1749944004/1984_lbukam.jpg"
    },
    {
      titulo: "Dom Quixote",
      autor: "Miguel de Cervantes",
      editora: "Penguin Classics",
      imagem: "https://res.cloudinary.com/dnatxacxq/image/upload/v1749944094/download_h33usy.webp"
    },
    {
      titulo: "A Revolução dos Bichos",
      autor: "George Orwell",
      editora: "Companhia das Letras",
      imagem: "https://res.cloudinary.com/dnatxacxq/image/upload/v1749944284/shopping_rivl29.webp"
    }
  ];

  const maisLidos = [
    {
      titulo: "O Hobbi",
      autor: "J.R.R. Tolkien",
      editora: "HarperCollins",
      imagem: "https://res.cloudinary.com/dnatxacxq/image/upload/v1749945285/91M9xPIf10L._SY342__jhvut7.jpg"
    },
    {
      titulo: "Harry Potter e a Pedra Filosofal",
      autor: "J.K. Rowling",
      editora: "Rocco",
      imagem: "https://res.cloudinary.com/dnatxacxq/image/upload/v1749945416/61jgm6ooXzL._SY342__g4p0yt.jpg"
    },
    {
      titulo: "A Culpa é das Estrelas",
      autor: "John Green",
      editora: "Intrínseca",
      imagem: "https://res.cloudinary.com/dnatxacxq/image/upload/v1749945513/41yToN1cOML._SY445_SX342__a85ino.jpg"
    },
    {
      titulo: "Orgulho e Preconceito",
      autor: "Jane Austen",
      editora: "Martin Claret",
      imagem: "https://res.cloudinary.com/dnatxacxq/image/upload/v1749944465/download_xgszlx.webp"
    }
  ];

  const container1 = document.getElementById("livrosContainer");
  const container2 = document.getElementById("livrosContainer2");

  function criarCard(livro, container) {
    const card = document.createElement("div");
    card.className = "col-12 col-sm-6 col-lg-3 mb-4";

    card.innerHTML = `
      <div class="card h-100">
        <img src="${livro.imagem}" class="card-img-top" alt="Capa do livro ${livro.titulo}">
        <div class="card-body">
          <h5 class="card-title">${livro.titulo}</h5>
          <p class="card-text"><strong>Autor:</strong> ${livro.autor}</p>
          <p class="card-text"><strong>Editora:</strong> ${livro.editora}</p>
        </div>
      </div>
    `;

    container.appendChild(card);
  }

  destaque.forEach(livro => criarCard(livro, container1));
  maisLidos.forEach(livro => criarCard(livro, container2));
});