# Agenda de eventos

Agenda de eventos feito com react

## 🔨 Funcionalidades do projeto

O projeto possui um formulário [descricao, dataInicio, dataFim]  
Quando o evento é salvo, automaticamente é adicionado em uma lista e no calendário  
A lista possui um filtro por data e opção de deletar ou marcar como terminado  
O calendário é feito com a biblioteca <a href="https://kalend.org/">Kalend</a>  
É possível modificar os eventos de dia e horário, sincronizado com a lista  
Qualquer mudança é refletida em todos os lugares da aplicação  
Os dados são puxados por um simulador de API: <a href="https://github.com/typicode/json-server#getting-started">JSON Server</a>

## ✔️ Técnicas e tecnologias utilizadas

- `React`
- `Typescript`
- `React Hooks`
- `RecoilJS`

## 🛠️ Abrir e rodar o projeto:

É necessário ter instalado no PC:
- node.js
- npm
- git

Execute os comandos:
- npm install
- npm start

Em outro terminal execute os comandos:
- npm install -g json-server
- json-server --watch db.json -p 8080