class Cliente {
    constructor (nombre, apellido, ndeOrden){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ndeOrden = ndeOrden;
    }
}

const clienteJuan = new Cliente (Juan, Perez, 0130);
const clientePedro = new Cliente (Pedro, Gonzales, 0131);
const clienteGustavo = new Cliente (Gustavo, Rodriguez, 0132);
const clienteLucas = new Cliente (Lucas, Sequeira, 0133);

const arrayClientes = [clienteJuan, clientePedro, clienteGustavo, clienteLucas];

class Producto{
    constructor(producto, ndeOrden, precio){
        this.producto = producto;
        this.ndeOrden = ndeOrden;
        this.precio = precio;
    }
}

const guantesProtectores = new Producto (guantes, 0130, 500);
const cascoProtector = new Producto (casco, 0131, 1000);
const arnesDeSeguridad = new Producto (arnes, 0132, 1500);
const gafasProtectoras = new Producto (gafas, 0133, 800);

const arrayProductos = [gafasProtectoras, cascoProtector, arnesDeSeguridad, gafasProtectoras];

 //funcion consulta

 function producto() {
    let ndeOrden = parseInt (prompt("Ingrese el numero de orden para consultar el precio:"));
    let producto = arrayProductos.find (Producto => Producto.ndeOrden === ndeOrden);
    console.log (producto);
 }
