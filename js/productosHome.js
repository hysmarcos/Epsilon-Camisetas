function MuestroProductosHome() {
    let productosCatCamisetas = "";
    productosCatCamisetas += `<div class="grid__container__producto">`;
    baseDeDatosProductos.forEach(prod => {
        // Verifico si la categoria a analizar es Camisetas
        if (prod.categoria === 'Camisetas') {
            // Si hay existencias del producto
            if (prod.stock > 0) {
                productosCatCamisetas += `
                <div class="grid__container__producto__image">
                    Hola
                </div>
                `
            }
            // En caso de no tener existencias del producto
            else {
                productosCatCamisetas += `
                <div class="grid__container__producto__image">

                </div>
                `
            }
        }
    })
    productosCatCamisetas += `</div>`;
    return productosCatCamisetas;
}