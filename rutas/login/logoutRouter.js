import { Router } from 'express';
import { usersDao } from '../contenedores/daos/index.js.js';

//router
const logout = Router();

//logger
import {logger} from '../../logs/logger.js';

logout.get("/", async (req, res) => {
  const datosUsuario = await usersDao.getById(req.user._id);
  const user = datosUsuario.username;  
  req.session.destroy((err) => { 
    if (!err) {
      const {method} = req;
      const time = new Date().toLocaleString();
      logger.info(`Logout Exitoso --> Ruta '/logout' - con metodo: ${method} - time: ${time}`);
      res.render('logout', {user}); 
    } else res.send("Error");
  });
});
    
export { logout };