import { creaProducto } from "./logica";

const prodForm = document.querySelector("#form-prod");
export const cargaForm = () => {
  prodForm.onsubmit = (error) => {
    error.preventDefault();

    const codigoProducto = document.querySelector("#codigo").value;
    const nombre = document.querySelector("#nombre").value;
    const descripcion = document.querySelector("#descripcion").value;
    const precio = document.querySelector("#precio-venta").value;
    const existencias = document.querySelector("#existencias").value;

    creaProducto(codigoProducto, nombre, descripcion, precio, existencias);
  };
};
