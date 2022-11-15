import {Router} from 'express';
import auth from '../../negocio/auth.js';
const home = Router();

//logger
import {logger} from '../../logs/logger.js';

//controllers
import {productosDao} from '../../contenedores/daos/index.js';
import {usersDao} from '../../contenedores/daos/index.js';
import {carritosDao} from '../../contenedores/daos/index.js';

home.get("/", auth, async (req, res) => {
  const {method} = req;
  const time = new Date().toLocaleString();  
  const carts = await carritosDao.list()
  const cart = carts.find(el => el.userId == req.user._id) 
  if (!cart) {
    const newCart = await carritosDao.save(req.user._id)    
    const productos = await productosDao.list();    
    const datosUsuario = await usersDao.getById(req.user._id);    
    logger.info(`Ruta '/' - con metodo: ${method} - time: ${time}`);
    res.render("home", {
      userData : datosUsuario,
      productos,
      cart: newCart
    });
  } else {
    const productos = await productosDao.list();
    const datosUsuario = await usersDao.getById(req.user._id);  
    logger.info(`Ruta '/' - con metodo: ${method} - time: ${time}`);
    res.render("home", {
      userData : datosUsuario,      
      productos,
      cart   
    });
  }
});
  
export { home };