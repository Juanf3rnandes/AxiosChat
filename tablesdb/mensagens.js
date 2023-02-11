import banco from '../db.js'
import sequelize, { DATE, INET, INTEGER } from 'sequelize'


const ModeloMensagem = banco.define('mensagens', {
    data:{type:sequelize.DATE, allownull:false},
    id_mensagem:{type:sequelize.INTEGER,primaryKey:true}
 
})

export default ModeloMensagem