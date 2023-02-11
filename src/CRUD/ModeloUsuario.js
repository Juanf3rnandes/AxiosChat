import sequelize, { INTEGER } from 'sequelize'
import banco from '../../db.js'

const ModeloUsuario = banco.define('usuarios',{
    id:{
            type:sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
            
    },

})
export default ModeloUsuario