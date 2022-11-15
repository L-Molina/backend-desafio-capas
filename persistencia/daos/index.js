let productosDao;
let carritosDao;
let usersDao;

const PERS = process.env.PERS || "mongodb";

import dotenv from 'dotenv';
dotenv.config();

switch (PERS) {
  case 'json':
		const ProductosDaoArchivo = await (async () => {let {ProductosDaoArchivo} = await import('./productos/ProductosDaoArchivo.js'); return ProductosDaoArchivo})();
		const CarritosDaoArchivo = await (async () => {let {CarritosDaoArchivo} = await import('./carritos/CarritosDaoArchivo.js'); return CarritosDaoArchivo})();
		productosDao = new ProductosDaoArchivo();
		carritosDao = new CarritosDaoArchivo();
		break; 
  case 'firebase':
    const ProductosDaoFirebase = await (async () => {let {ProductosDaoFirebase} = await import('./productos/ProductosDaoFirebase.js'); return ProductosDaoFirebase})();
    const CarritosDaoFirebase = await (async () => {let {CarritosDaoFirebase} = await import('./carritos/CarritosDaoFirebase.js'); return CarritosDaoFirebase})();
    productosDao = new ProductosDaoFirebase();
    carritosDao = new CarritosDaoFirebase();
    break;
  case 'mongodb':
    const ProductosDaoMongoDb = await (async () => {let {ProductosDaoMongoDb} = await import('./productos/ProductosDaoMongoDb.js'); return ProductosDaoMongoDb})();     
    const CarritosDaoMongoDb = await (async () => {let {CarritosDaoMongoDb} = await import('./carritos/CarritosDaoMongoDb.js'); return CarritosDaoMongoDb})();    
    const UserDaoMongoDb = await (async () => {let {UserDaoMongoDb} = await import('./usuarios/UsuariosDaoMongoDb.js'); return UserDaoMongoDb})();
    productosDao = new ProductosDaoMongoDb();
    carritosDao = new CarritosDaoMongoDb();
    usersDao = new UserDaoMongoDb();
    break;
  case 'memoria':
    const ProductosDaoMemoria = await (async () => {let {ProductosDaoMemoria} = await import('./productos/ProductosDaoMemoria.js'); return ProductosDaoMemoria})();
    const CarritosDaoMemoria = await (async () => {let {CarritosDaoMemoria} = await import('./carritos/CarritosDaoMemoria.js'); return CarritosDaoMemoria})();
    productosDao = new ProductosDaoMemoria();
    carritosDao = new CarritosDaoMemoria();
    break;
	default:
    productosDao = new ProductosDaoArchivo();
    carritosDao = new CarritosDaoArchivo();
    break;
}

export { productosDao, carritosDao };