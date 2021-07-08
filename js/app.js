/*
    Proyecto: Sitio Web Ecommerce
    Nombre: Epsilon Camisetas
    Descripción: Sitio de venta de productos deportivos.
*/

console.log(`-- El sitio posee mensajes en la consola en puntos clave del sitio, por lo que se recomienda dejar activo la consola del navegador --\n-- En el monto se recomienda ingresar un monto mayor a $10.000 --`)
// Genero una variable de clase Cliente.
var cliente = new Cliente('', 3000, 0, '', carrito);
// Genero una variable para almacenar el pedido con los detalles relevantes
var listadoCompra;
// Genero variables para los distintos IDs de HTML
var idSaldo = document.getElementById('balance');
var idNombre = document.getElementById('name');
var idMetodoDePago = document.getElementById('paymentMethod');
var idMontoTotal = document.getElementById('totalAmount');
var idCarrito = document.getElementById('productList');
// Mientras el nombre del cliente sea vacío, solicito el reingreso.
do{
    cliente.nombre = prompt('Ingrese su nombre');
}while(cliente.nombre == '');
console.log(`Nombre ingresado ${cliente.nombre}`);
// Evalúa si el monto ingresado es correcto, si es menor o igual a 0.
do{
    cliente.saldo = prompt('Ingrese el saldo disponible en la tarjeta');
}while(parseFloat(cliente.saldo) <= 0 || cliente.saldo == '');
cliente.saldo = parseFloat(cliente.saldo);

console.log(`Monto ingresado: $${cliente.saldo}`);

var opcion = Menu(opcion);
// Ciclo que cumple la función de menú del programa principal.
while(opcion != 'S'){
    if(opcion === 'A'){
        ListadoProductos(cliente);
    }
    else if(opcion === 'C'){
        alert(`Tu saldo disponible es de $${cliente.mostrarSaldo}`);
    }
    else if(opcion === 'V'){
        alert(`El pedido es el siguiente:\n________________________________________________________\n${cliente.pedido.map(item => `          ${item.nombre}   | Talle: ${item.talle}\nPrecio unitario $${item.precio} | Cantidad: ${item.cantidad} | Subtotal: $${item.precio*item.cantidad}\n---------------------------------------------------------`).join("\n")}\n________________________________________________________\nTotal: $${cliente.montoTotal}`)
    }
    else if(opcion === 'F'){
        FinalizarCompra(cliente);
    }
    cliente.pedido.sort(OrdenarPedido);
    opcion = Menu(opcion);
};

// Función de confirmación de compra, para mostrar un agradecimiento.
function ConfirmaCompra (CC_cliente){
    if((prompt(`¿Confirma la compra? [S/N]:`)).toUpperCase() == 'S'){
        alert(`¡Muchas gracias por su compra!`);
        // Muestro el nombre del cliente
        idNombre.innerHTML = (`¡Hola ${cliente.mostrarNombre}!`);
        // Listado de productos
        idCarrito.innerHTML = ('<ul>');
        idCarrito.innerHTML += (` ${cliente.pedido.map(item => `<li>${item.nombre} | ${item.talle} | ${item.cantidad} | $${item.precio}</li>`).join('\n')}`)
        idCarrito.innerHTML += ('</ul>');
        idSaldo.innerHTML = (`Tu saldo restante fue de $${cliente.mostrarSaldo}`);
        idMontoTotal.innerHTML = (`Su compra tiene un valor de $${cliente.montoTotal} a pagar con ${cliente.mostrarMetodoDePago}`);
        // TODO: Agregar listado productos con salida en HTML
        window.stop();
    }
}

// Esta función cumple el proposito de indicar cuál es el método de pago del cliente, y mostrar en pantalla sus promociones y descuentos (Si los hay).
function FinalizarCompra(FC_cliente){
    var FC_confirmaCompra = false;
    // Evalúo si el cliente posee una compra pendiente, de no ser así (x=0), arroja una notificación, caso contrario indica los métodos de pago.
    if(FC_cliente.montoTotal==0){
        alert(`No ha realizado ninguna compra.`);
    }
    else{
        do{
            FC_cliente.cambiarMetodoDePago = parseInt(prompt('Ingrese su metodo de pago:\n[1] Efectivo (10% Off)\n[2] Tarjeta VISA\n[3] Tarjeta MasterCard\n[4] Tarjeta American Express (3 Cuotas S/interes)'))
        }while(FC_cliente.metodoDePago != 1 && FC_cliente.metodoDePago != 2 && FC_cliente.metodoDePago != 3 && FC_cliente.metodoDePago != 4);
        if(FC_cliente.metodoDePago === 1){
            FC_cliente.metodoDePago = 'efectivo';
            alert (`El monto total a abonar en efectivo es de $${(FC_cliente.montoTotal - (FC_cliente.montoTotal*0.10)).toFixed(2)}`);
            ConfirmaCompra(FC_cliente);
        }
        else if(FC_cliente.metodoDePago === 2 || FC_cliente.metodoDePago === 3){
            FC_cliente.metodoDePago = 'Visa/Mastercard';
            alert (`El monto total a abonar es de $${(FC_cliente.montoTotal.toFixed(2))}`);
            ConfirmaCompra(FC_cliente);
        }
        else if(FC_cliente.metodoDePago === 4){
            FC_cliente.metodoDePago = 'AMEX';
            alert (`El monto total a abonar es de $${FC_cliente.montoTotal}, con posibilidad de compra en 3 cuotas de $${(FC_cliente.montoTotal/3).toFixed(2)}`);
            ConfirmaCompra(FC_cliente);
        }
        else{
            alert ('El valor ingresado es incorrecto.');
        }
    }
}

// Esta función cumple el proposito de calcular si la cantidad de productos ingresados multiplicado por el monto del producto, no supera el saldo actual del cliente
function CalculoCantidadProductos(CCP_producto, CCP_cliente){
    let CCP_qProductos;
    CCP_qProductos = prompt(`Ingrese la cantidad a comprar:`);
    while(CCP_producto*parseInt(CCP_qProductos)>CCP_cliente.saldo || CCP_qProductos == ''){
        CCP_qProductos = prompt(`La cantidad ingresada es incorrecta, verifique el valor ingresado o ingrese 0:`);
        console.log(`Cantidad ingresada: ${CCP_qProductos}. El valor del producto es de $${CCP_producto} y el saldo restante es de $${CCP_cliente.saldo}.`)
    }
    CCP_qProductos = parseInt(CCP_qProductos);
    CCP_cliente.saldo = CCP_cliente.saldo - CCP_producto * CCP_qProductos;
    CCP_cliente.montoTotal = CCP_cliente.montoTotal + CCP_producto*CCP_qProductos;
    return CCP_qProductos;
};

// Esta función cumple el proposito de mostrarle al cliente los productos a elegir
function ListadoProductos(LP_cliente){
    let LP_posicion, LP_productoActual;
    LP_posicion = parseInt(prompt(`Listado de productos:\n
    [1] ${baseDeDatosProductos[0].nombre}: $${baseDeDatosProductos[0].precio}
    [2] ${baseDeDatosProductos[1].nombre}: $${baseDeDatosProductos[1].precio}
    [3] ${baseDeDatosProductos[2].nombre}: $${baseDeDatosProductos[2].precio}
    [4] ${baseDeDatosProductos[3].nombre}: $${baseDeDatosProductos[3].precio}
    [5] ${baseDeDatosProductos[4].nombre}: $${baseDeDatosProductos[4].precio}
    [6] ${baseDeDatosProductos[5].nombre}: $${baseDeDatosProductos[5].precio}
    [7] ${baseDeDatosProductos[6].nombre}: $${baseDeDatosProductos[6].precio}
    `));
    LP_productoActual = baseDeDatosProductos[LP_posicion-1];
    if (LP_posicion >= 1 && LP_posicion <=7){
        LP_productoActual.cantidad =CalculoCantidadProductos(LP_productoActual.precio, LP_cliente);
        if(LP_productoActual.cantidad > 0){
            do{
                LP_productoActual.talle = prompt(`Ingrese el talle para ${LP_productoActual.nombre}.\n[S/M/L/XL]`);
                LP_productoActual.talle = LP_productoActual.talle.toUpperCase();
            }while(LP_productoActual.talle != 'S' && LP_productoActual.talle != 'M' && LP_productoActual.talle != 'L' && LP_productoActual.talle != 'XL');
            LP_cliente.pedido.push(LP_productoActual);
        }
        console.log(`Producto nuevo agregado:\nProducto:${LP_productoActual.nombre} | Talle ${LP_productoActual.talle} | Cantidad: ${LP_productoActual.cantidad}`);
    }
    else{
        console.log(`No se encontró el producto número ${LP_posicion}.`);
        alert('El producto ingresado no existe.');
    }
    alert(LP_cliente.mostrarSaldo);
};

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

// Menu del sitio
function Menu(){
    let M_opcion;
    do{
        M_opcion = prompt('Ingrese una de las siguientes opciones:\n[A] Agregar un producto\n[C] Consultar Saldo Disponible\n[V] Ver Carrito\n[F] Finalizar Compra\n[S] Salir')
        M_opcion = M_opcion.toUpperCase();
    }while((M_opcion !='A' && M_opcion !='C' && M_opcion !='V'  && M_opcion !='F' && M_opcion !='S') || M_opcion =='');
    console.log(`Opción ingresada: ${M_opcion}`);
    return M_opcion;
};