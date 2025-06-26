# books - biblioteca virtual
### *Autor:* Hellen Vitoria Bufrem Passsos
Este projeto tem como objetivo, ser uma aplicação web que tem a funcionalidade de armazenar livros lidos pelo usuário, servindo realmente como uma biblioteca virtual, podendo adicionar o título e autor do livro, bem como a avaliação e até mesmo um cometário, sendo possível tambem adicionar a capa do livro via url.

O frontend da aplicação foi desenvolvido com HTML, CSS e JavaScript e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

## Design das Telas - Figma: 
https://www.figma.com/design/JAyV50skbvBAjIokKhxyhv/books?node-id=0-1&t=4Wjvk8OPqMNQ5GGC-1

## Design System: 
https://www.figma.com/design/JAyV50skbvBAjIokKhxyhv/books?node-id=19-761&t=pRwI7SV06AG3L2gp-1

## Site em Produção - GitHub Pages

## Framework CSS
Bootstrap

## Dependências JavaScript
- *JSON Server* - Para simular uma API Rest.

## Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)


## Manual de execução
- Clonar o repositório com git clone https://github.com/HellenBufrem/books-biblioteca.git
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto
- (Opcional) Instalar o JSON Server globalmente disponível em https://www.npmjs.com/package/json-server
  - Comando: npm i -g json-server 
  - É opcional porque a dependência já vem cadastrada no arquivo package.json para instalação local na pasta node_modules
- Executar a API Fake (JSON Server) via o seguinte comando: 
  - Utilizar o comando completo: npx json-server --watch db.json --port 3000
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo db.json
  - Por padrão, a aplicação JSON Server executa no endereço localhost:3000    
- Executar o projeto frontend.

## Telas da aplicação

