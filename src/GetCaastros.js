import app from '../server/index.js'
import Usuarios from '../src/classPerfil.js'

function teste() {
    app.get('/teste', (req, res) => {
        Usuarios.forEach(user => {
            res.send(user)
        })
    })
}

export default teste