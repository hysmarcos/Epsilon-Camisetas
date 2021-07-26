function MuestroProductosHome() {
    let productosCatCamisetas = "";
    productosCatCamisetas += `<div class="grid__container__producto">`;
    baseDeDatosProductos.map(prod => {
        // Verifico si la categoria a analizar es Camisetas
        if (prod.categoria === 'Camisetas') {
            // Si hay existencias del producto
            if (prod.stock > 0) {
                productosCatCamisetas += `
                <div class="grid__container__producto__image">
                    <img src="${prod.imagen}" alt="${prod.nombre}">
                    <div class="middle">
                        <div class="grid__container__producto__image__button addToCartButton">Ver Producto</div>
                    </div>
                </div>
                <div class="">
                    <a class="btn-add d-grid gap-2 mx-auto" id="">
                        <span class="grid__container__producto__image__button-show">${prod.nombre}<br>${prod.precio}</span>
                        <span id="descripcion-producto-1" class="grid__container__producto__image__button-hover addToCartButton">Ver Producto</span>
                    </a>
                </div>
                `
            }
            // En caso de no tener existencias del producto
            else {
                productosCatCamisetas += `
                <div class="grid__container__producto__image">
                    <img src="${prod.imagen}" alt="${prod.nombre}">
                    <div class="middle">
                        <div class="grid__container__producto__image__button addToCartButton">Ver Producto</div>
                    </div>
                </div>
                <div class="">
                    <a class="btn-add-nostock d-grid gap-2 mx-auto" id="">
                        <span class="grid__container__producto__image__button-show">${prod.nombre}<br>Sin Stock</span>
                        <span id="descripcion-producto-1" class="grid__container__producto__image__button-hover addToCartButton">Ver Producto</span>
                    </a>
                </div>
                `
            }
        }
    })
    productosCatCamisetas += `</div>`;
    return productosCatCamisetas;
}