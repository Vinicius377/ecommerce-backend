# Backend para o projeto [ecommerce-games](https://github.com/Vinicius377/ecommerce-games)

## Tecnologias utilizadas

- NodeJs
- Express
- Prisma
- MySql
- Typescript

## Features

- [x] Adicionar um produto novo no BD
- [x] Buscar um produto especifico no BD
- [x] Buscar uma lista de produtos no BD
- [x] Deletar produto no BD
- [x] Atualizar informações de um produto especifico no BD
- [ ] Criar uma nova conta de usuário
- [ ] Sistema de login com jwt

## Requisitos minimos

- Ter o [NodeJs](nodejs.org) instalado na sua maquina
- Ter o [MySql](https://www.mysql.com/downloads/) instalado na sua maquina

## Como utilizar

- Faça o clone desse repositório
- Abra o projeto em algum editor de código de sua preferência
- No terminal do editor:
  - Execute o comando `yarn` para baixar todas as dependências do projeto
- Renomeie o arquivo`.env-example` para `.env`
- Após isso, utilize o padrão de URL do prisma descrito no [Site Oficial](https://www.prisma.io/docs/concepts/database-connectors/mysql#connection-url) para alterar a variável DATABASE_URL dentro do arquivo `.env`

## TaskRunners

```bash
    yarn dev
    ## Executa o modo de desenvolvimento, utilizando o ts-node-dev

```

- O projeto por padrão irá abrir em http://localhost/2222, mas você pode alterar a PORT no arquivo `.env`
