import { Router } from 'express';
import auth from '../../negocio/auth.js';
import { usersDao } from '../../contenedores/daos/index.js';

//router
const sessions = Router();

//logger
import {logger} from '../../logs/logger.js';

sessions.get("/", auth, async (req, res) => {
    const { method } = req;
    const time = new Date().toLocaleString();
    logger.info(`Ruta '/sessions' - con metodo: ${method} - time: ${time}`);
    const datosUsuario = await usersDao.getById(req.user._id); 
    const user = datosUsuario.username; 
    res.status(201).json({data: user})  
});  

export { sessions };