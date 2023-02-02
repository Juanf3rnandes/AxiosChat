import express from 'express'
import http from 'http'
import { Socket } from 'socket.io'
import { Server } from 'socket.io'
const port = 8080

const app = express()

const server = http.createServer(app)

const io = new Server(server)

// servido arquivos estaticos
app.use(express.static('./public'))


server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

io.on("connection", (socket) => {
    console.log(`${socket.id} se conecou ao servidor`)
})