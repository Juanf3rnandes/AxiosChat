import sequelize, { INTEGER } from 'sequelize'
import STRING from 'sequelize'
import banco from '../../db.js'

const ModeloLogin = banco.define('logins', {
    login:{
        type:sequelize.STRING,
    },
    email:{
        type:sequelize.STRING,
    },
    password:{
        type:sequelize.STRING, 
    },
})
export default ModeloLogin