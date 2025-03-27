# Amazon Scraper

This project is a simple web scraper developed with **TypeScript** and **Bun** to extract product listings from the first page of search results on Amazon based on a provided keyword. The backend uses **Axios** to fetch the content of Amazon's search results and **JSDOM** to parse and extract product details. The frontend is implemented with **HTML**, **CSS**, and **JavaScript**.

## Backend Technologies

- **Bun**: A high-performance JavaScript and TypeScript runtime environment, used instead of Node.js.
- **TypeScript**: Used for static typing and better code quality.
- **Express**: Web framework to handle HTTP requests.
- **Axios**: HTTP client to make requests to Amazon's website.
- **JSDOM**: Used to parse and extract product data from Amazon's HTML content.
- **Cors**: Middleware to allow cross-origin requests.
- **Puppeteer**: Headless browser used for more complex scraping (optional).
- **dotenv**: To manage environment variables.

## Frontend Technologies

- **HTML**: For the basic structure of the web page.
- **CSS**: For styling and making the web page presentable.
- **JavaScript**: To manage user interactions and make AJAX requests to the backend API.
- **Vite**: Build tool for frontend development, used for fast development and optimized build.

## Features

- Extracts product listings from Amazon based on a search keyword.
- Extracts product title, rating, number of reviews, and product image URL.
- Provides an API endpoint to start the scraping process and return results in JSON format.

## Prerequisites

- **Bun** (backend): Bun needs to be installed to run the backend.
- **Node.js** (frontend): Node.js must be installed to run the frontend.
- **NPM** (Node Package Manager)

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/claudiojas/amazonScraperBun.git
    cd amazonScraperBun
    ```

2. Install the backend dependencies:

    ```bash
    bun install
    ```

3. Install the frontend dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file to store environment variables (if needed).

5. Start the backend development server:

    ```bash
    bun run dev
    ```

    The backend server will run on `http://localhost:8080`.

6. Start the frontend development server:

    ```bash
    npm run dev
    ```

    The frontend will be served on `http://localhost:3000`.

## API Endpoint

- **GET** `/api/scrape?keyword=yourKeyword`
  
  This endpoint accepts a query parameter `keyword` and returns a list of products found in the Amazon search results for that keyword. The returned JSON will include:

  - `title`: The product title.
  - `rating`: The product's rating (if available).
  - `reviews`: The number of reviews for the product.
  - `image`: The URL of the product's image.

### Example Request:
GET http://localhost:8080/api/scrape?keyword=laptop

### Example Response:

```json
{
  "results": [
    {
      "title": "Product Title",
      "rating": "4.5 out of 5 stars",
      "reviews": "1500",
      "image": "https://example.com/image.jpg"
    },
    ...
  ]
}
```

# Amazon Scraper Frontend

This is the frontend of the **Amazon Scraper**, developed with **Vite** and **Vanilla JavaScript**. The application allows you to enter a keyword and retrieve Amazon product results for display.

## Technologies

- **Vite**: Build tool for fast and efficient development.
- **Vanilla JavaScript**: Using pure JavaScript for user interactions.
- **CSS**: For styling and layout of the page.
- **HTML**: For the page structure.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/claudiojas/amazonScraperBun.git
    cd amazonScraperBun
    ```

2. Install the dependencies with **NPM**:

    ```bash
    npm install
    ```

    Or, using the shorthand:

    ```bash
    npm i
    ```

3. After installing the dependencies, start the development server:

    ```bash
    npm run dev
    ```

    The frontend will be served at `http://localhost:3000`.

## Functionality

The frontend allows you to enter a keyword to search for products on Amazon. It makes a request to the backend, which returns the products and then displays the results on the page.

1. Type a keyword (e.g., "laptop") in the search field.
2. Click the "Search" button.
3. The found products will be listed with their title, rating, and image.

## File Structure

- **index.html**: The main HTML page that contains the frontend structure.
- **style.css**: The CSS file for styling the page.
- **script.js**: The JavaScript file responsible for user interactions and making AJAX requests to the backend.

## Usage Instructions

1. After running the command `npm run dev`, open your browser and go to `http://localhost:3000`.
2. Enter a search term in the search box and press the "Search" button.
3. The page will be updated with the products found related to the provided keyword.

## Example Usage

If you enter "laptop" in the search field and press "Search," the frontend will make a request to the backend that will fetch related products from Amazon. The results will be displayed in a list format with information such as product title, rating, and number of reviews.



# Amazon Scraper

Este projeto é um simples web scraper desenvolvido com **TypeScript** e **Bun** para extrair listagens de produtos da primeira página de resultados de pesquisa na Amazon com base em uma palavra-chave fornecida. O backend usa **Axios** para buscar o conteúdo dos resultados de pesquisa da Amazon e **JSDOM** para analisar e extrair detalhes dos produtos. O frontend é implementado com **HTML**, **CSS** e **JavaScript**.

## Tecnologias do Backend

- **Bun**: Ambiente de execução JavaScript e TypeScript de alta performance, usado no lugar do Node.js.
- **TypeScript**: Usado para tipagem estática e melhor qualidade de código.
- **Express**: Framework web para gerenciar requisições HTTP.
- **Axios**: Cliente HTTP para fazer requisições para o site da Amazon.
- **JSDOM**: Usado para analisar e extrair dados de produtos do conteúdo HTML da Amazon.
- **Cors**: Middleware para permitir requisições de origens cruzadas.
- **Puppeteer**: Navegador sem cabeça utilizado para scraping mais complexo (opcional).
- **dotenv**: Para gerenciar variáveis de ambiente.

## Tecnologias do Frontend

- **HTML**: Para a estrutura básica da página web.
- **CSS**: Para estilizar e tornar a página web apresentável.
- **JavaScript**: Para gerenciar interações do usuário e fazer requisições AJAX para a API do backend.
- **Vite**: Build tool para frontend, usado para desenvolvimento rápido e construção otimizada.

## Funcionalidades

- Extrai listagens de produtos da Amazon com base em uma palavra-chave de pesquisa.
- Extrai título do produto, avaliação, número de avaliações e URL da imagem do produto.
- Fornece um endpoint da API para iniciar o processo de scraping e retornar os resultados no formato JSON.

## Pré-requisitos

- **Bun** (backend): Para executar o backend com Bun, é necessário ter o Bun instalado.
- **Node.js** (frontend): Para rodar o frontend, é necessário ter o Node.js instalado.
- **NPM** (Node Package Manager)

## Configuração

1. Clone o repositório:

    ```bash
    git clone https://github.com/claudiojas/amazonScraperBun.git
    cd amazonScraperBun
    ```

2. Instale as dependências do backend:

    ```bash
    bun install
    ```

3. Instale as dependências do frontend:

    ```bash
    npm install
    ```

4. Crie um arquivo `.env` para armazenar variáveis de ambiente (se necessário).

5. Inicie o servidor de desenvolvimento para o backend:

    ```bash
    bun run dev
    ```

    O servidor backend estará rodando em `http://localhost:8080`.

6. Inicie o servidor de desenvolvimento para o frontend:

    ```bash
    npm run dev
    ```

    O frontend será servido em `http://localhost:3000`.

## Endpoint da API

- **GET** `/api/scrape?keyword=suaPalavraChave`
  
  Esse endpoint aceita um parâmetro de consulta `keyword` e retorna uma lista de produtos encontrados nos resultados de pesquisa da Amazon para essa palavra-chave. O JSON retornado incluirá:

  - `title`: O título do produto.
  - `rating`: A avaliação do produto (se disponível).
  - `reviews`: O número de avaliações do produto.
  - `image`: A URL da imagem do produto.

### Exemplo de Requisição:
GET http://localhost:8080/api/scrape?keyword=laptop

### Exemplo de Resposta:

```json
{
  "results": [
    {
      "title": "Título do Produto",
      "rating": "4.5 de 5 estrelas",
      "reviews": "1500",
      "image": "https://example.com/imagem.jpg"
    },
    ...
  ]
}
```

# Frontend do Amazon Scraper

Este é o frontend do **Amazon Scraper**, desenvolvido com **Vite** e **Vanilla JavaScript**. A aplicação permite que você insira uma palavra-chave e recupere os resultados de produtos da Amazon para exibição.

## Tecnologias

- **Vite**: Build tool para desenvolvimento rápido e eficiente.
- **Vanilla JavaScript**: Utilização de JavaScript puro para interações do usuário.
- **CSS**: Para estilização e layout da página.
- **HTML**: Para a estrutura da página.

## Configuração

1. Clone o repositório:

    ```bash
    git clone https://github.com/claudiojas/amazonScraperBun.git
    cd amazonScraperBun
    ```

2. Instale as dependências com **NPM**:

    ```bash
    npm install
    ```

    Ou, de forma abreviada:

    ```bash
    npm i
    ```

3. Após a instalação das dependências, inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

    O frontend será servido em `http://localhost:3000`.

## Funcionalidade

O frontend permite que você insira uma palavra-chave para pesquisar produtos na Amazon. Ele faz uma requisição para o backend, que retorna os produtos, e então exibe os resultados na página.

1. Digite uma palavra-chave (por exemplo, "laptop") no campo de pesquisa.
2. Clique no botão "Buscar".
3. Os produtos encontrados serão listados com seu título, avaliação e imagem.

## Estrutura de Arquivos

- **index.html**: A página HTML principal que contém a estrutura do frontend.
- **style.css**: Arquivo CSS para estilização da página.
- **script.js**: Arquivo JavaScript responsável pelas interações do usuário e requisições AJAX para o backend.

## Instruções de Uso

1. Após rodar o comando `npm run dev`, abra seu navegador e acesse `http://localhost:3000`.
2. Digite um termo de pesquisa na caixa de busca e pressione o botão "Buscar".
3. A página será atualizada com os produtos encontrados relacionados à palavra-chave fornecida.

## Exemplo de Uso

Se você inserir "laptop" no campo de pesquisa e pressionar "Buscar", o frontend fará uma requisição para o backend que buscará os produtos relacionados na Amazon. Os resultados serão exibidos em formato de lista com informações como título do produto, avaliação e número de avaliações.

