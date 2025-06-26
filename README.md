# books - biblioteca virtual
### *Autor:* Hellen Vitoria Bufrem Passsos
Este projeto tem como objetivo, ser uma aplicação web que tem a funcionalidade de armazenar livros lidos pelo usuário, servindo realmente como uma biblioteca virtual, podendo adicionar o título e autor do livro, bem como a avaliação e até mesmo um cometário, sendo possível tambem adicionar a capa do livro via url.

O frontend da aplicação foi desenvolvido com HTML, CSS e JavaScript e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

## Design das Telas - Figma: 
https://www.figma.com/design/JAyV50skbvBAjIokKhxyhv/books?node-id=0-1&t=4Wjvk8OPqMNQ5GGC-1

## Design System: 
https://www.figma.com/design/JAyV50skbvBAjIokKhxyhv/books?node-id=19-761&t=pRwI7SV06AG3L2gp-1

## Site em Produção - GitHub Pages
https://github.com/HellenBufrem/books-biblioteca.git

## Framework CSS
Bootstrap

## Dependências JavaScript
- *JSON Server* - Para simular uma API Rest.

## Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos
 [x] ID 00 - Prototipa interfaces adaptáveis para no mínimo os tamanhos de tela mobile e desktop, usando ferramentas de design como Figma, Quant UX ou Sketch.
 ID 01 - Implementa um layout responsivo utilizando um Framework CSS (Bootstrap, Materialize, Tailwind com DaisyUI), com Flexbox ou Grid.
 ID 02 - Utiliza técnica de responsividade nativa de CSS como Flexbox ou Grid Layout.
 ID 03 - Utiliza componentes CSS (ex. card, button) e JavaScript (ex. modal, carrossel) oferecidos por um Framework CSS.
 ID 04 - Implementa layout fluido com unidades relativas (vw, vh, %, em, rem) ao invés de unidades fixas (px).
 ID 05 - Implementa animações (fadeIn, fadeOut, slideIn, slideOut) com CSS Animations, Animate.css ou jQuery.
[ ] ID 06 - Cria transições personalizadas com CSS Transitions ou CSS Animation. // Não é necessário!
 ID 07 - Aplica um Design System consistente com diretrizes de estilo, cores, tipografia e padrões de componentes.
 ID 08 - Implementa pré-processadores CSS (ex: Sass), com variáveis, mixins e funções.
 ID 09 - Aplica tipografia responsiva com media queries ou clamp(), usando unidades como rem, em ou vw.
 ID 10 - Aplica responsividade em imagens com object-fit e containers com vh, %, rem.
 ID 11 - Otimiza imagens com WebP, srcset, <picture> ou URLs com Cloudinary (w_, h_, f_auto, q_auto).
 
RA2 - Tratamento de formulários e validações no lado cliente com HTML API e REGEX
 ID 12 - Implementa validação no lado cliente com mensagens de erro ou sucesso, usando a API do HTML.
 ID 13 - Aplica REGEX para validações customizadas de campos (e-mail, telefone, data, etc).
 ID 14 - Incorpora elementos como checkbox, radio ou select em formulários web.
 ID 15 - Lê e escreve dados no Web Storage para persistência local entre sessões.
RA3 - Ferramentas de otimização com Node.js, NPM, linters e boas práticas de versionamento
 ID 16 - Configura ambiente com Node.js e NPM para gerenciamento de pacotes.
[ ] ID 17 - Utiliza linters (ESLint, Stylelint) para garantir qualidade e consistência no código. // Não é necessário!
 ID 18 - Adota boas práticas de versionamento com Git e GitHub.
 ID 19 - Preenche o README.md conforme template da disciplina com o checklist incluso.
[ ] ID 20 - Minifica CSS, JS e otimiza imagens para melhor desempenho. // Não é necessário!
 ID 21 - Organiza os arquivos do projeto de maneira lógica e modular.
[ ] ID 22 - Utiliza metodologias BEM ou SMACSS na estruturação dos estilos CSS. // Não é necessário!
RA4 - Aplicar bibliotecas JavaScript para interatividade
 ID 23 - Usa jQuery para manipular DOM, eventos e interatividade.
 ID 24 - Integra plugin jQuery (ex: jQuery Mask Plugin) para funcionalidade específica.
[ ] ID 25 - Utiliza Web Components (ex: Lit) para criar componentes reutilizáveis. // Não é necessário!
[ ] ID 26 - Usa biblioteca de componentes prontos (Material Web Components, etc) ou componentes standalone. // Não é necessário!
RA5 - Requisições assíncronas para APIs fake e públicas
 ID 27 - Realiza requisição assíncrona para API fake para persistência de dados via formulário.
 ID 28 - Realiza requisição assíncrona para API fake para exibição de dados na interface.

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

