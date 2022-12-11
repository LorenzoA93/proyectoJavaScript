class Producto{
    constructor(producto, ndeOrden, precio){
        this.producto = producto;
        this.ndeOrden = ndeOrden;
        this.precio = precio;
    }
}

const guantesProtectores = new Producto ("guantes", 130, 500);
const cascoProtector = new Producto ("casco", 131, 1000);
const arnesDeSeguridad = new Producto ("arnes", 132, 1500);
const gafasProtectoras = new Producto ("gafas", 133, 800);

const arrayProductos = [guantesProtectores, cascoProtector, arnesDeSeguridad, gafasProtectoras];

//Introduccion

alert("Bienvenido a MDS Ezeiza, los productos de Seguridad Laboral. Los productos a ofrecer son: \n a)Guantes(130) \n b)Casco de Seguridad (131) \n c)Arnes de Seguridad (132) \n d)Gafas Protectoras(133) ");

 //funcion consulta

 function producto() {
    let ndeOrden = parseInt (prompt("Ingrese el numero de orden para consultar el precio:"));
    let producto = arrayProductos.find (Producto => Producto.ndeOrden === ndeOrden);
    console.log (producto);
    alert("el precio de su producto consultado es: " + producto.precio + "$");
 }
producto()