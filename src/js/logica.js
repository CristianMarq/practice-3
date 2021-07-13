import { Producto } from "./Producto";

let productos = [];

export const creaProducto = (
  codigoProducto,
  nombre,
  descripcion,
  precio,
  existencias
) => {
  const producto = new Producto(
    codigoProducto,
    nombre,
    descripcion,
    precio,
    existencias
  );
  console.log(producto);
};
