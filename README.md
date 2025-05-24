# Demonstração de APIs REST/RESTful - Arquitetura de Sistemas Web

## Descrição

Este projeto demonstra o consumo de uma API RESTful utilizando JavaScript puro e a API Fetch. O objetivo é ilustrar os conceitos fundamentais de arquiteturas REST e RESTful através de exemplos práticos com a API JSONPlaceholder.

## Estrutura do Projeto

- `index.html`: Interface gráfica com botões para testar cada operação HTTP
- `script.js`: Implementação das requisições HTTP e manipulação da interface

## Conceitos Demonstrados

### Métodos HTTP

O projeto exemplifica os principais métodos HTTP utilizados em APIs REST:

- **GET**: Obter recursos (todos os posts ou um post específico)
- **POST**: Criar novos recursos (adicionar um novo post)
- **PUT**: Atualizar recursos existentes (modificar um post)
- **DELETE**: Remover recursos (excluir um post)

### Princípios REST e RESTful

1. **Interface Uniforme**: Utilização padronizada de métodos HTTP para cada tipo de operação
2. **Cliente-Servidor**: Separação clara entre frontend (cliente) e backend (servidor)
3. **Stateless**: Cada requisição é independente e contém todas as informações necessárias
4. **Cacheable**: As respostas da API podem ser armazenadas em cache
5. **Sistema em Camadas**: O cliente acessa a API sem precisar conhecer sua implementação
6. **Recursos como Entidade Central**: Manipulação de posts como recursos da API

## Como Utilizar

1. Clone o repositório
2. Abra o arquivo `index.html` em um navegador web
3. Clique nos botões disponíveis para testar diferentes operações da API:
   - GET Todos os Posts: Obtém e exibe os primeiros posts
   - GET Post ID 1: Obtém e exibe um post específico
   - POST Novo Post: Cria um novo post
   - PUT Atualizar Post ID 1: Atualiza um post existente
   - DELETE Post ID 1: Remove um post

## Relevância para a Disciplina

Este projeto é fundamental para o estudo de Arquitetura de Sistemas Web, pois:

- Demonstra a implementação prática dos conceitos teóricos de REST
- Ilustra como diferentes métodos HTTP são utilizados para operações CRUD
- Exibe a interação cliente-servidor em uma arquitetura web moderna
- Apresenta padrões de design para consumo de APIs

## Detalhes Técnicos

- Utiliza a [API JSONPlaceholder](https://jsonplaceholder.typicode.com/) para simulação de requisições
- Interface estilizada com Tailwind CSS para melhor experiência visual
- Feedback de operações através de notificações temporárias
- Manipulação assíncrona com async/await para requisições HTTP
- Tratamento adequado de erros em operações de rede

## Tecnologias Utilizadas

- JavaScript (ES6+)
- Fetch API
- HTML5
- Tailwind CSS
- JSONPlaceholder (API de teste)
