import express from 'express'
import bodyParser from 'body-parser'
import http from 'http'
import { Socket } from 'socket.io'
import { Server } from 'socket.io'
import TestaBanco from '../src/CRUD/testingconnect.js'
import Sync from '../src/CRUD/sync.js'
import teste from '../src/GetCaastros.js'
import cadastraUsuario from '../src/PostCadastro.js'
import AutenticaLogin from '../src/GetCaastros.js'
const port = 8080

//chama funcoes do banco
TestaBanco()
Sync()

const app = express()


const server = http.createServer(app)

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
const io = new Server(server)

// servido arquivos estaticos
app.use(express.static('./public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

io.on("connection", (socket) => {
    console.log(`${socket.id} se conecou ao servidor`)
    socket.on("SendMessage", (mensagem) => {
        socket.broadcast.emit("r_SendMessage", (mensagem))
    })
    socket.on("formulariocadastro", (data) => {
        socket.broadcast.emit("r_formulariocadastro", (data))
    })
})

// exporta a variavel pra ser usada em outros componentes
export default app

teste() // chama funcao get usuario e outro componente
cadastraUsuario() // chama funcao que ao enviar formulario faz uma chamada fetch em um post do componente
AutenticaLogin() // usa findAll no banco pra validar login