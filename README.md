# Timetable Restinga Fetcher

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Sumário

- [Sobre](#-sobre)
- [Como funciona](#-como-funciona)
- [Documentação](#-documentação)
- [Instalação](#-instalação)

## 🧠 Sobre

Timetable Restinga Fetcher é uma API HTTP que recupera informações de horário do servidor do Timetable — Campus Restinga, permitindo o acesso simples a estes dados.

## 💭 Como funciona

Este projeto usa a função `fetchHorarioTurmas` do projeto [Edupage Restinga Horários](https://github.com/RaissonGitHub/Edupage-Restinga-Horarios) para fornecer os dados do Timetable Restinga de forma estruturada através de uma API HTTP fácil de consumir.

## 📜 Documentação

A documentação da API, incluindo seus _endpoints_, está disponível on-line em: <https://viccios.github.io/timetable-restinga-fetcher/>

A especificão OpenAPI está disponível no arquivo `openapi.json`.

## 💪 Instalação

Clone o repositório:
`git clone https://github.com/viccios/timetable-restinga-fetcher.git`

Instale as dependências:
`npm install`

Crie o arquivo `.env` (um arquivo `.env.example` está disponível como referência):
`touch .env` ou `cp .env.example .env`

Inicie o servidor:
`npm start`

Para desenvolvimento, use o comando `npm run dev`
