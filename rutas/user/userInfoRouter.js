import { Router } from 'express';
import auth from '../../negocio/auth.js';
import { usersDao } from '../../contenedores/daos/index.js';

//router
const userInfo = Router();

userInfo.get("/", auth, async (req, res) => {  
  const userData = await usersDao.getById(req.user._id);
  res.render('user', {userData}); 
});

export { userInfo };