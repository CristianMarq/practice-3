import { Producto } from "./Producto";

const tbody = document.querySelector("#productos-desc tbody");
let productos = [];

const creaRow = () => {
  let lista = productos;
  tbody.innerHTML = "";

  for (let i = 0; i < lista.length; i++) {
    let row = tbody.insertRow(i);
    let codCell = row.insertCell(0),
      nombreCell = row.insertCell(1),
      descripcionCell = row.insertCell(2),
      precioCell = row.insertCell(3),
      existenciasCell = row.insertCell(4);

    codCell.innerHTML = lista[i].codigoProducto;
    nombreCell.innerHTML = lista[i].nombre;
    descripcionCell.innerHTML = lista[i].descripcion;
    precioCell.innerHTML = `$${lista[i].precioVenta}`;
    existenciasCell.innerHTML = lista[i].existencias;

    tbody.appendChild(row);
  }
};

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
  productos.push(producto);
  creaRow();
};
