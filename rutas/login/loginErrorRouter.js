import { Router } from 'express';
const loginError = Router();

loginError.get("/", (req, res) => {  
  res.render('error', {error: 'Usuario o contraseña incorrectos', url: 'login'}) 
});

export { loginError };