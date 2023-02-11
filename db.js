import Sequelize from "sequelize";

const banco = new Sequelize('Usuarios', 'root', 'juan102030', {
    dialect:'mysql',
    host:'localhost', 
    port:3306
})

export default banco