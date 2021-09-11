# Encurtador de URLS
Essa API foi criada com o intuito de estudar NodeJS com a integração do banco de dados MongoDB
Caso você queira replicar no seu computador, basta apenas clonar este repositório, criar um arquivo .env e preencher as informações como estão exemplificadas no arquivo .env.example. Divirta-se! :) 

## Rotas utilizadas
 - POST
   - /api/url/shorten  
   Rota utilizada para criar um novo link encurtado  
   Corpo da requisição: 
     - longURL: String  (link original que deseja encurtar)
 - GET
   - /:code  
     Rota utilizada para acessar um link encurtado e ser redirecionado para o link original  
     Parâmetros da requisição:
       - code: String (short id gerado pelo encurtador)
   - /random  
     Rota utilizada para ser redirecionado para um link encurtado aleatório  
   - /random/api  
     Rota utilizada para o receber um link encurtado aleatório por JSON  

## Tecnologias utilizadas

 - NodeJS
 - MongoDB
 - Mongoose
 - Express
 - Javascript
 
## Plataformas de Deploy
- Heroku

### [Demo do projeto no Heroku (Apenas para requisições, sem interface visual)](https://url-shortener-api-devmaktubi.herokuapp.com/)

## Roadmap de ideias a serem feitas
- Requisição para link aleatório do banco, como algo para passar  o tempo ✔
- Criação de uma interface para a API ❌
- Criação de um bot de Discord para interagir com a API ❌

