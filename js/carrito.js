// Array utilizado para ingresar productos en el carrito de compras
var carrito = [];

// Cambio en navbar el icono del carrito dependiendo si posee productos o no
function CambioEstadoCarrito() {
    var cartNav = document.getElementById('cart-nav');
    if (client.pedido.length > 0){
        cartNav.innerHTML = '<img id="cart-nav" class="mt-2" src="https://raw.githubusercontent.com/hysmarcos/Epsilon-Camisetas/main/assets/cart-no-empty.png" height="24px" alt="carrito" srcset="">'
    }
    else{
        cartNav.innerHTML = '<img id="cart-nav" class="mt-2" src="https://raw.githubusercontent.com/hysmarcos/Epsilon-Camisetas/main/assets/cart-empty.png" height="24px" alt="carrito" srcset="">'
    }
}


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