import sequelize from "sequelize";
import banco from "../../db.js"
import ModeloUsuario from "./ModeloUsuario.js";
import ModeloMensagem from '../../tablesdb/mensagens.js'
import ModeloLogin from "./ModeloLogin.js";
import CriaAdmin from '../../admin/CriaAdmin.js'
async function Sync(){
    await banco.sync()
    //await ModeloUsuario.create({id:1000})

}
export default Sync