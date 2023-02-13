import { response } from 'express'
import bodyParser from 'body-parser'
import app from '../server/index.js'
import CryptoJS from 'crypto-js'
import Usuarios from '../src/classPerfil.js'
import  ModeloLogin from './CRUD/ModeloLogin.js'
import express from 'express'
 async function AutenticaLogin() {
//app.use(express.json())
//app.use(bodyParser.urlencoded({extended:true}))
 app.post('/AutenticaLogin', (req,res) => {

    try{
        ModeloLogin.findAll({
            where:{
              email: req.body.email,
                password:req.body.password
                }
            })
            .then(
                result => {
                    res.send(result)})
    }catch(error){
        console.log(error)
    }
 })
}

export default AutenticaLogin