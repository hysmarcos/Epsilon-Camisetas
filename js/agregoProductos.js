const addToCartButton = document.getElementById('btnAddToCart');
let productName = document.getElementById('productName').innerHTML;

addToCartButton.onclick = function (){
    let productSearched;
    productSearched = baseDeDatosProductos.find( prod => prod.nombre === productName);
    console.log(productSearched);
    client.pedido.push(productSearched);
    AlmacenoDatosLocal()
    addToCartButton.innerText = "¡Producto agregado!"
    setTimeout(function(){ window.location.href = '../cart.html'; }, 1000);
}