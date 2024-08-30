# Weekly Meal Planner

Este é um aplicativo para gerenciamento de planos de refeições semanais. Ele permite criar, visualizar, atualizar e remover planos de refeições, onde cada refeição pode incluir detalhes como nome, lista de receitas, quantidade de porções e notas específicas. O aplicativo é construído com Node.js e utiliza o SQLite para armazenamento de dados.

## Funcionalidades

- **Criar**: Adicione novos planos de refeições com detalhes completos.
- **Visualizar**: Veja os planos de refeições existentes com todas as informações.
- **Atualizar**: Modifique planos de refeições existentes.
- **Remover**: Exclua planos de refeições que não são mais necessários.

## Tecnologias

- **Backend**: Node.js com TypeScript
- **Banco de Dados**: SQLite
- **Framework para rotas**: Express


## Documentação

Acesse a documentação da API clicando [aqui](https://meal-planner-back-g46s.onrender.com/api-docs/)

## Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Siga os passos abaixo para instalar e executar o projeto localmente.

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Ivan-Vidal/meal-planner-back.git
   cd meal-planner-back

    ```

2. **Instale as dependências**

    ```bash 
    npm install
    # ou
    yarn install

    ```

3. **Execute o projeto**

   ```bash 
    npm run dev

    ```

O servidor estará disponível em http://localhost:3000.


## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- `src/`: Contém o código-fonte do aplicativo.
  - `controllers/`: Lógica para lidar com as solicitações HTTP.
  - `models/`: Definições dos modelos de dados e interações com o banco de dados.
  - `routes/`: Rotas do aplicativo.
  - `config/`: Configurações e conexões do banco de dados.
- `migrations/`: Scripts para criar e atualizar o esquema do banco de dados.


## Contribuição

Contribuições são bem-vindas! Para contribuir com este projeto, por favor siga os seguintes passos:

1. Faça um fork do repositório.
2. Crie uma branch para sua nova funcionalidade:

   ```bash
   git checkout -b feature/MinhaNovaFuncionalidade

    ```

3. Commit suas mudanças:

   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   
    ```
4. Faça o push para a branch:

    ```bash
    git push origin feature/MinhaNovaFuncionalidade
    ```
5. Abra um Pull Request.


## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
