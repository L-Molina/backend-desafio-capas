import express from 'express';

let router = express.Router();

//routers
import { home } from './other/homeRouter.js';
import { productsList } from './product/productsListRouter.js.js'
import { products } from './product/productRouter.js'
import { carts } from './other/carritoRouter.js'
import { users } from './user/userRouter.js'
import { login } from './login/loginRouter.js'
import { loginError } from './login/loginerrorRouter.js'
import { logout } from './login/logoutRouter.js'
import { sessions } from './other/sessionsRouter.js'
import { userInfo } from './user/userInfoRouter.js'
import { error } from './other/errorRouter.js'

//middlewares
router.use("/lista-productos", productsList);
router.use("/productos", products);
router.use("/carrito", carts);
router.use("/register", users);
router.use("/login", login); 
router.use("/loginerror", loginError); 
router.use("/logout", logout); 
router.use("/sessions", sessions); 
router.use("/user", userInfo); 
router.use("/", home);
router.use("*", error);

export { router };