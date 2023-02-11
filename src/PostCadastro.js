import express from 'express'
import app from '../server/index.js'
import Usuarios from '../src/classPerfil.js'
import sequelize from "sequelize";
import banco from '../db.js'
import ModeloLogin from './CRUD/ModeloLogin.js';
import bodyParser from 'body-parser';

function cadastraUsuario() {
      app.post('/cadastrarusuario', (req, res) => {
        const newUserData = req.body
        if(req.body == undefined) {
            res.send("erro ao efetuar cadastro")
        }else{
        res.send('usuario cadastrado'+  req.body)
       ModeloLogin.create(
          {
            login:req.body.nome,
            email:req.body.email,
            password:req.body.password
          }
        )
        console.log(newUserData)
 }})
}

export default cadastraUsuario