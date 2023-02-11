import sequelize from 'sequelize'
import banco from '../db.js'
import ModeloLogin from '../src/CRUD/ModeloLogin.js'

function CriaAdmin(){
    ModeloLogin.create({
        login:"Juanfodao",
        email:'fernandesjuan633@gmail.com',
        password:'650dcb800d4eb2530b3ba5ee81461644418eb7a9b59d03f51ba2d8ca8b55dc7a'
    })
}

export default CriaAdmin