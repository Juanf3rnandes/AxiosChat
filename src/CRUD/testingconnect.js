import banco from "../../db.js";

async function TestaBanco(){
    
try{
    await banco.authenticate()
    console.log('CONEXAO COM BANCO EFETUADA COM SUCESSO')
} catch(error){
    console.log("FALHA AO SE CONECTAR COM BANCO" + error)
}
}

export default TestaBanco
