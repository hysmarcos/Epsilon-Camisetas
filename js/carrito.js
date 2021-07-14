// Array utilizado para ingresar productos en el carrito de compras
var carrito = [];

// Funcion para ordenar el pedido del cliente (Ejercicio num6 complementario)
function OrdenarPedido(a, b){
    if ( a.nombre < b.nombre ){
        return -1;
    }
    if ( a.nombre > b.nombre ){
        return 1;
    }
    return 0;
};