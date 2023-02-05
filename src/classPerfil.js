class Perfil {
    constructor(nome, email, amigos) {
        this.nome = nome
        this.email = email
        this.amigos = amigos
    }
    adionaAmigo(nome){
        const Amigos =[]
        Amigos.push(nome)
    }
}

const UsuarioTeste = new Perfil("Juan", "teste@gmail.com", )

const Usuarios = []

export default Usuarios