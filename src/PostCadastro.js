import app from '../server/index.js'
import Usuarios from '../src/classPerfil.js'

function cadastraUsuario() {
    app.post('/cadastrarusuario', (req, res) => {
        const newUserData = req.body
        res.send('usuario cadastrado')
        Usuarios.push(newUserData)
    })
}

export default cadastraUsuario