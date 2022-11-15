import {Router} from 'express';
import auth from '../../negocio/auth.js';

//router
const products = Router();

//logger
import {logger} from '../../logs/logger.js';

//controllers
import {productosDao} from '../../contenedores/daos/index.js';
import {usersDao} from '../../contenedores/daos/index.js';

products.get("/", auth, async (req, res) => {
  const { method } = req;
  const time = new Date().toLocaleString();
  const datosUsuario = await usersDao.getById(req.user._id);
  const user = datosUsuario.username; 
  if (user.toLowerCase() !== 'elmo') {
    logger.info(`Acceso no Autorizado --> Ruta '/productos' - con metodo: ${method} - time: ${time}`);
    return res.render('unauthorized')
  }  
  const productos = await productosDao.list();
  logger.info(`Ruta '/productos' - con metodo: ${method} - time: ${time}`);
  res.render("products", { 
    productos: productos
  });
});

products.get("/:id", auth, (req, res) => {  
  const { method } = req;
  const time = new Date().toLocaleString();
  logger.info(`Ruta '/productos/:id' - con metodo: ${method} - time: ${time}`);
  let id = req.params.id    
  productosDao.getById(id) 
  .then(data => {      
    res.status(201).json(data)
  })
});

products.post("/", auth, (req, res) => {  
  const { method } = req;
  const time = new Date().toLocaleString();
  logger.info(`Ruta '/productos' - con metodo: ${method} - time: ${time}`);
  const {name, description, code, thumbnail, price, stock} = req.body
  productosDao.save({name, description, code, thumbnail, price, stock})
  .then(data => {
    res.json(data)
  })
});

products.delete("/:id", auth, async (req, res) => { 
  const { method } = req;
  const time = new Date().toLocaleString();
  const datosUsuario = await usersDao.getById(req.user._id); 
  const user = datosUsuario.username; 
  if (user.toLowerCase() !== 'eneas') { 
    logger.info(`Acceso no Autorizado --> Ruta '/productos' - con metodo: ${method} - time: ${time}`);
    return res.render('unauthorized')
  } 
  logger.info(`Ruta '/productos/:id' - con metodo: ${method} - time: ${time}`);
  let id = req.params.id  
  productosDao.deleteById(id) 
  .then(data => { 
    res.json(data) 
  })
});

products.get("/edtiProduct/:id", auth, async (req, res) => {
  const { method } = req;
  const time = new Date().toLocaleString();
  const datosUsuario = await usersDao.getById(req.user._id); 
  const user = datosUsuario.username;  
  const id = req.params.id;
  const producto = await productosDao.getById(id);
  if (user.toLowerCase() !== 'eneas') { 
    logger.info(`Acceso no Autorizado --> Ruta '/edtiProduct' - con metodo: ${method} - time: ${time}`);
    return res.render('unauthorized')
  } 
  logger.info(`Ruta '/edtiProduct' - con metodo: ${method} - time: ${time}`);
  return res.render('edtiProduct', {id: id, producto: producto})
});

products.put("/edtiProduct", auth, async (req, res) => {
  const { method } = req;
  const time = new Date().toLocaleString();
  const datosUsuario = await usersDao.getById(req.user._id); 
  const user = datosUsuario.username; 
  if (user.toLowerCase() !== 'elmo') {
    logger.info(`Acceso no Autorizado --> Ruta '/edtiProduct' - con metodo: ${method} - time: ${time}`);
    return res.render('unauthorized')
  } 
  const {_id, name, description, code, thumbnail, price, stock} = req.body
  productosDao.changeById(_id, {name, description, code, thumbnail, price, stock}) 
  .then(data => {
    logger.info(`Producto Editado con Exito --> Ruta '/edtiProduct' - con metodo: ${method} - time: ${time}`);
    res.json(data) 
  })
});

export {products};