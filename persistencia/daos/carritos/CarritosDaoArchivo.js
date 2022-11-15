import ContenedorArchivo from '../../contenedores/ContenedorArchivo.js';
import fetch from 'node-fetch';

const url = './db/cart.json'

class CarritosDaoArchivo extends ContenedorArchivo {
  constructor() {
    super(url);
  }

  async guardar() {
    let obj = { products: [] }
    super.save(obj)  
  }

  async addProduct(idCart, idProduct) {
    console.log(idCart, idProduct);
    try {
      const productData = await fetch(`/api/productos/${idProduct}`) 
      const product = await productData.json()
      if (product.error) {
        return ({ error: 'Producto no encontrado' })
      }
      const arr = await super.list()
      if (arr.length === 0) {return ({"Error" : "No hay Carritos"})}
      let indexCart = arr.findIndex(el => el.id == idCart)
      if (indexCart == -1) {
        return ({ error: 'Carrito no encontrado' })
      }
      arr[indexCart].products.push(product)
      await super.changeById(idCart, arr[indexCart])
      return "Producto Agregado"            
    } catch (err) {      
      throw new Error('Error de escritura', err)
    }  
  }

  async deleteProduct(idCart, idProduct) {
    try {
      const arr = await super.list()
      if (arr.length === 0) {return ({"Error" : "No hay Carritos"})}   
      let indexCart = arr.findIndex(el => el.id == idCart)
      if (indexCart == -1) {
        return ({ error: 'Carrito no encontrado' })
      }   
      let indexProduct = arr[indexCart].products.findIndex(el => el.id == idProduct)
      if (indexProduct == -1) {
        return ({ error: 'Producto no encontrado' })
      }   
      arr[indexCart].products.splice(indexProduct, 1)
      await super.changeById(idCart, arr[indexCart])
      return "Producto Eliminado"
    } catch (err) {
      throw new Error('Error de escritura', err)
    }
  }
}

export { CarritosDaoArchivo }