import { Router } from 'express';

//router
const productList = Router();

//controllers
import {productosDao} from '../../contenedores/daos/index.js';

productList.get("/", async (req, res) => {
  const productos = await productosDao.list(); 
  res.json(productos);
});

export { productList };