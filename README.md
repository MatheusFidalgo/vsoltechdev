# Teste Prático VSolTech Dev

* **Framework**: Next.js (App Router)
* **Linguagem**: TypeScript
* **Estilização**: Tailwind CSS
* **Gerenciamento de Estado**: React Context API
* **Dados**: Simulação de API com mocks locais

---

### Como Rodar o Projeto

Siga estes passos simples para clonar o repositório e rodar o projeto em sua máquina local.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/MatheusFidalgo/vsoltechdev.git](https://github.com/MatheusFidalgo/vsoltechdev.git)
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd [PastaDoProjeto]
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

O projeto estará acessível em `http://localhost:3000`.

---
### Decisões de Design/Arquitetura

1. Organização foi feita de maneira modular, para tornar o projeto facil para manutenções e colaborações.
2. Foi escolhida a React Context API por já ser nativa e atender a necessidade do projeto.
3. Componentes bem divididos para evitar repetição de código, como por exemplo header, cartitem e productcard.
4. Simulação dos dados foi feita a partir de mocks locais para testar a resposta de uma API de maneira clara.
