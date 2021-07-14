let addToCartButton1 = document.getElementById('descripcion-producto-1')
let talle1 = document.getElementById('talle-producto-1')
let addToCartButton2 = document.getElementById('descripcion-producto-2')
let talle2 = document.getElementById('talle-producto-2')
let addToCartButton3 = document.getElementById('descripcion-producto-3')
let talle3 = document.getElementById('talle-producto-3')
let addToCartButton4 = document.getElementById('descripcion-producto-4')
let talle4 = document.getElementById('talle-producto-4')
let addToCartButton5 = document.getElementById('descripcion-producto-otros-1')
let talle5 = document.getElementById('talle-producto-otros-1')
let addToCartButton6 = document.getElementById('descripcion-producto-otros-2')
let talle6 = document.getElementById('talle-producto-otros-2')
let addToCartButton7 = document.getElementById('descripcion-producto-otros-3')
let talle7 = document.getElementById('talle-producto-otros-3')
let addToCartButton8 = document.getElementById('descripcion-producto-otros-4')
let talle8 = document.getElementById('talle-producto-otros-4')

// addToCartButton.addEventListener("click", AgregarProducto);
addToCartButton1.addEventListener("click", AgregarProducto(baseDeDatosProductos[0], talle1));
addToCartButton2.addEventListener("click", AgregarProducto(baseDeDatosProductos[1], talle2));
addToCartButton3.addEventListener("click", AgregarProducto(baseDeDatosProductos[2], talle3));
addToCartButton4.addEventListener("click", AgregarProducto(baseDeDatosProductos[3], talle4));
addToCartButton5.addEventListener("click", AgregarProducto(baseDeDatosProductos[4], talle5));
addToCartButton6.addEventListener("click", AgregarProducto(baseDeDatosProductos[5], talle6));
addToCartButton7.addEventListener("click", AgregarProducto(baseDeDatosProductos[6], talle7));
addToCartButton8.addEventListener("click", AgregarProducto(baseDeDatosProductos[7], talle8));

function AgregarProducto (AP_producto, AP_talle) {
    alert('Producto agregado.');
    console.log(`Producto: ${AP_producto.nombre} Talle: ${AP_talle.value}`)
}