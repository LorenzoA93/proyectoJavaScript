//Sweet Alert
const efectuarLaCompra = document.getElementById ("efectuarLaCompra");
efectuarLaCompra.addEventListener("click",() => {
    Swal.fire({
        title:"Estado de la Compra",
        text: "Su compra ha sido realizada con éxito.",
        icon: "success",
        confirmButtonText: "Aceptar",
        background: "#F5D5ED",
    })
})