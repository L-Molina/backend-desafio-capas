import express from 'express';
import {Router} from 'express';

//router
const error = Router();

//logger
import {logger} from '../../logs/logger.js';

error.get("*", (req, res) => { 
  const {url, method} = req;
  logger.warn(`Ruta ${url} Inexistente - con metodo: ${method}`); 
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

error.post("*", (req, res) => {
  const {url, method} = req;
  logger.warn(`Ruta ${url} Inexistente - con metodo: ${method}`);   
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

error.delete("*", (req, res) => {  
  const {url, method} = req;
  logger.warn(`Ruta ${url} Inexistente - con metodo: ${method}`); 
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

error.put("*", (req, res) => { 
  const {url, method} = req;
  logger.warn(`Ruta ${url} Inexistente - con metodo: ${method}`);  
  res.json({ error : -2, descripcion: `ruta inexistente` })
});

export {error}