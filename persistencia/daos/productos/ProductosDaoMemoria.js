import ContenedorMemoria from "../../contenedores/ContenedorMemoria.js";
import { productos } from '../../../db/memoria.js';

class ProductosDaoMemoria extends ContenedorMemoria {
  constructor () {
    super(productos)
  }
}

export { ProductosDaoMemoria };