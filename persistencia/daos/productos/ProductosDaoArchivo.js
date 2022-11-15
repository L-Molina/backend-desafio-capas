import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

const url = './db/products.json'

class ProductosDaoArchivo extends ContenedorArchivo {
  constructor() {
    super("productos.json");
  }
}

export { ProductosDaoArchivo }