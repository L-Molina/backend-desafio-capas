import { Router } from 'express';
import passport from '../../negocio/passport.js'; 

//router
const login = Router();

//logger
import { logger } from '../../logs/logger.js';

login.get("/", (req, res) => { 
  const {method} = req; 
  const time = new Date().toLocaleString();
  logger.info(`Ruta '/login' - con metodo: ${method} - time: ${time}`);
  res.render('login'); 
});


login.post("/", passport.authenticate("local", { failureRedirect: "/loginerror" }),
  (req, res) => {
    const {method} = req;
    const time = new Date().toLocaleString();
    logger.info(`Inicio de sesion Exitoso --> Ruta '/login' - con metodo: ${method} - time: ${time}`);
    res.redirect("/");
  }
);

export { login };