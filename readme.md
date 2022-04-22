# Backend para o projeto [ecommerce-games](https://github.com/Vinicius377/ecommerce-games)

## Tecnologias utilizadas

- NodeJs
- Express
- Prisma
- MySql
- Typescript

## Features

- [x] PostProducts
- [x] GetProduct
- [ ] GetAllProducts
- [ ] CreateUser
- [ ] LoginUser

## Requisitos minimos

- Ter o [NodeJs](nodejs.org) instalado na sua maquina
- Ter o [MySql](https://www.mysql.com/downloads/) instalado na sua maquina

## Como utilizar

- Faça o clone desse repositório
- Abra o projeto em algum editor de código de sua preferência
- No terminal do editor:
  - Execute o comando `yarn ` para baixar todas as dependências do projeto
- Renomeie o arquivo`.env-example` para `.env`
- Após isso utilize o padrão de URL do prisma descrito no (Site Oficial) para alterar a variável DATABASE_URL dentro do arquivo `.env`

## TaskRunners

```bash
    yarn dev
    ## Executa o modo de desenvolvimento, utilizando o ts-node-dev

```

- O projeto por padrão irá abrir em http://localhost/2222, mas você pode alterar a PORT no arquivo `.env`
