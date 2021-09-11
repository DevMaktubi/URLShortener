const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express()

const connection = require('./config/db.config')
connection.once('open', () => console.log('Banco conectado!'))
connection.on('error', () => console.log('Erro ao conectar com o banco.'))


app.use(express.json({
    extended: false
}))

app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT} 👍`))