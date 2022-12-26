class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1; 
    }
}

const guantesDeSeguridad = new Producto(1, "Guantes Moteados", 500, "img/guantes.jpg");
const protectoresAuditivos = new Producto(2, "Auriculares", 500, "img/auriculares.jpg");
const cascoDeSeguridad = new Producto(3, "Casco de Seguridad", 800, "img/casco.jpg");
const gafasDeSeguridad = new Producto(4, "Gafas Protectoras", 400, "img/gafas.jpg");
const barbijo = new Producto(5, "Barbijo", 200, "img/barbijo.jpg");
const mascaraAntiGases = new Producto(6, "Mascara Anti-gases", 1500, "img/mascara.jpg");
const camisaDeTrabajo = new Producto(7, "Camisa de Trabajo", 2000, "img/camisa.jpg");
const pantalonesDeTrabajo = new Producto(8, "Pantalones de Trabajo", 3000, "img/pantalones.jpg");
const borsegos = new Producto(9, "Borsegos", 5000, "img/borsegos.jpg");
const matafuegos = new Producto(10, "Matafuegos ABC", 6000, "img/matafuegos.jpg");

//catálogo 

const productos = [guantesDeSeguridad, protectoresAuditivos, cascoDeSeguridad, gafasDeSeguridad, barbijo, mascaraAntiGases, camisaDeTrabajo, pantalonesDeTrabajo, borsegos, matafuegos];
 

let pedidos = []; 

//Carga de pedidos desde el localstorage
if(localStorage.getItem("pedidos")){
    pedidos = JSON.parse(localStorage.getItem("pedidos"));
}

//DOM muestra de productos: 

const contenedorProductos = document.getElementById("contenedorProductos");

//Targetas

const muestraDeProductos = () => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body text-center">
                        <h5>${producto.nombre}</h5>
                        <p> ${producto.precio} </p>
                        <button class="btn colorBoton" id="boton${producto.id}" > Agregar Pedido </button>
                    </div>
                </div>
                        `
        contenedorProductos.appendChild(card);

        //Agregar productos
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarPedido(producto.id);
        })
    })
}

muestraDeProductos();
//agregar al pedido: 

const agregarPedido = (id) => {
    const productoPedido = pedidos.find(producto => producto.id === id);
    if(productoPedido) {
        productoPedido.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        pedidos.push(producto);
    }
    //localStorage: 
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    calcularTotal();
}

//Muestra de pedidos: 

const contenedorPedidos = document.getElementById("contenedorPedidos");
const verPedidos = document.getElementById("verPedidos")

verPedidos.addEventListener("click", () => {
    mostrarPedidos();
})

//Herramienta de pedidos: 

const mostrarPedidos = () => {
    contenedorPedidos.innerHTML = "";

    pedidos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
                    <div class= "card-body text-center">
                        <h5>${producto.nombre}</h5>
                        <p> ${producto.precio} </p>
                        <p> ${producto.cantidad} </p>
                        <button class="btn colorBoton" id="eliminar${producto.id}" > Eliminar Producto </button>
                    </div>
                </div>
                        `
        contenedorPedidos.appendChild(card);

 //Como eliminar productos: 
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarPedidos(producto.id);
        })

    })
    calcularTotal();
}

//Herramienta para eliminar pedidos: 

const eliminarPedidos = (id) => {
    const producto = pedidos.find(producto => producto.id === id);
    const indice = pedidos.indexOf(producto);
    pedidos.splice(indice, 1);
    mostrarPedidos();

    //localStorage: 
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

//Vaciar. 

const vaciarPedidos = document.getElementById("vaciarPedidos");

vaciarPedidos.addEventListener("click", () => {
    eliminarTodosLosPedidos();
})

//Herramienta de reseteo de todos los pedidos: 

const eliminarTodosLosPedidos = () => {
    pedidos = [];
    mostrarPedidos();

//LocalStorage:
    localStorage.clear();
}

//total de la compra

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    pedidos.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML = `Total: $${totalCompra}`;
}