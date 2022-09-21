import express from 'express'
import http from 'http'

const app = express()

app.get('/', (req, res) => {
    res.send('Bem vindo ao meu App')
})

app.get('/contact', (req, res) => {
    res.send('Página de Contato do meu App')
})

app.get('/product', (req, res) => {
    res.send('Página de Produto do meu App')
})

app.set('port', 3000 || process.env.PORT)

http.createServer(app).listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`)
})