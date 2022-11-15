import { Router } from 'express';

//router
const users = Router();

//logger
import { logger } from '../../logs/logger.js';

//funcion para enviar mail
import { sendMail } from '../../negocio/nodemailer.js';

//funcion para subir archivos
import upload from '../../negocio/multer.js';

//controller
import { usersDao } from '../../contenedores/daos/index.js';


users.get("/", (req, res) => {  
  const { method } = req;
  const time = new Date().toLocaleString();
  logger.info(`Ruta '/register' - con metodo: ${method} - time: ${time}`);
  res.render('register'); 
});

users.post("/", upload.single("myFile"), (req, res) => {
  const {method} = req;
  const time = new Date().toLocaleString();
  const file = req.file;
  const image = file.filename;
  console.log(file);
  const {username, edad, telefono, direccion, password, email } = req.body   
  usersDao.save({username, email, edad, telefono, direccion, password, image }) 
  .then (user => {
    if (user) { 
      sendMail(user);  
      logger.info(`Registro Exitoso --> Ruta '/register' - con metodo: ${method} - time: ${time}`);      
      return res.render('success') 
    } else {
      logger.warn(`Registro Fallido --> Ruta '/register' - con metodo: ${method} - time: ${time}`);
      res.render('error', {error: 'Usuario ya registrado', url: 'register' }) 
    }      
  })
});
