export class Producto {
  codigoProducto;
  nombre;
  descripcion;
  precioVenta;
  existencias;

  constructor(codigo, nombre, descripcion, precioVenta, existencias) {
    this.codigoProducto = codigo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precioVenta = precioVenta;
    this.existencias = existencias;
  }

  get getCodigoPoducto() {
    return this.codigoProducto;
  }

  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

  get getDescripcion() {
    return this.descripcion;
  }

  set setDescripcion(descripcion) {
    this.descripcion = descripcion;
  }

  get getPrecioVenta() {
    return this.getPrecioVenta;
  }

  set setPrecioVenta(precioVenta) {
    this.precioVenta = precioVenta;
  }

  get getExistencias() {
    return this.existencias;
  }

  set setExistencias(existencias) {
    this.existencias = existencias;
  }
}
