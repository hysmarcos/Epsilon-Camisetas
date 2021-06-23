var cliente = {
    saldo : prompt('Ingrese su saldo disponible en la tarjeta'),
    montoTotal : 0,
}

var opcion;

opcion = Menu(opcion);

while(opcion != 'S'){
    if(opcion === 'A'){
        ListadoProductos(cliente);
    }
    else if(opcion === 'C'){
        FinalizarCompra(cliente, opcion);
    }
    opcion = Menu(opcion);
}

function ConfirmaCompra (FC_opcion){
    if(parseInt(prompt(`¿Confirma la compra? [S/N]:`)) == 'S'){
        return FC_opcion = true;
    }
}

function FinalizarCompra(FC_cliente, FC_opcion){
    var metodoDePago, confirmaCompra;
    if(FC_cliente.montoTotal==0){
        alert(`No ha realizado ninguna compra.`);
    }
    else{
        do{
            metodoDePago = parseInt(prompt('Ingrese su metodo de pago:\n[1] Efectivo (10% Off)\n[2] Tarjeta VISA\n[3] Tarjeta MasterCard\n[4] Tarjeta American Express (3 Cuotas S/interes)'))
        }while(metodoDePago != 1 && metodoDePago != 2 && metodoDePago != 3 && metodoDePago != 4);
        if(metodoDePago === 1){
            alert (`El monto total a abonar en efectivo es de $${FC_cliente.montoTotal - (FC_cliente.montoTotal*0.10)}`);
            confirmaCompra = ConfirmaCompra(FC_opcion);
        }
        else if(metodoDePago === 2 || metodoDePago === 3){
            alert (`El monto total a abonar es de $${FC_cliente.montoTotal}`);
            confirmaCompra = ConfirmaCompra(FC_opcion);
        }
        else if(metodoDePago === 4){
            alert (`El monto total a abonar es de $${FC_cliente.montoTotal}, con posibilidad de compra en 3 cuotas de $${FC_cliente.montoTotal/3}`);
            confirmaCompra = ConfirmaCompra(FC_opcion);
        }
        else{
            alert ('El valor ingresado es incorrecto.');
        }
        if (confirmaCompra == true){
            alert(`¡Muchas gracias por su compra!`)
            FC_cliente.saldo = FC_cliente.saldo - FC_cliente.montoTotal;
        }
    }
}

function CalculoCantidadProductos(CCP_producto, CCP_cliente){
    let CCP_qProductos;
    CCP_qProductos = parseInt(prompt(`Ingrese la cantidad a comprar:`));
    while(CCP_producto*CCP_qProductos>CCP_cliente.saldo){
        CCP_qProductos = parseInt(prompt(`La cantidad ingresada supera al saldo disponible, ingrese una cantidad menor:`));
    }
    CCP_cliente.saldo = CCP_cliente.saldo - CCP_producto*CCP_qProductos;
    CCP_cliente.montoTotal = CCP_cliente.montoTotal + CCP_producto*CCP_qProductos;
}

function ListadoProductos(LP_cliente){
    let LP_camiseta = 1200, LP_pantalon = 800, LP_buzo = 1800;
    let LP_producto, monto;
    LP_producto = parseInt(prompt(`Listado de productos:\n[1] Camiseta de futbol: $${LP_camiseta}\n[2] Pantalon: $${LP_pantalon}\n[3] Buzo Deportivo $${LP_buzo}`));
    if (LP_producto === 1){
        monto = CalculoCantidadProductos(LP_camiseta, LP_cliente);
    }
    else if(LP_producto === 2){
        monto = CalculoCantidadProductos(LP_pantalon, LP_cliente);
    }
    else if(LP_producto === 3){
        monto = CalculoCantidadProductos(LP_buzo, LP_cliente);
    }
    else{
        alert('El producto ingresado no existe.');
        monto = 0;
    }
    alert(`El monto total es de $${LP_cliente.montoTotal}, y su saldo restante es de $${LP_cliente.saldo}`);
}

function Menu(m_opcion){
    do{
        m_opcion = prompt('Ingrese una de las siguientes opciones:\n[A] Agregar un producto\n[C] Confirmar Compra\n[S] Salir')
    }while(m_opcion !='A' && m_opcion !='C' && m_opcion !='S' );
    return m_opcion;
}