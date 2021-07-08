class Cliente{
    constructor(nombre, saldo, montoTotal, metodoDePago, pedido){
        this.nombre = nombre;
        this.saldo = saldo;
        this.montoTotal = montoTotal;
        this.metodoDePago = metodoDePago;
        this.pedido = pedido;
    };
    get mostrarNombre(){
        return this.nombre;
        }
    get mostrarSaldo(){
        return this.saldo;
    }
    get mostrarMontoTotal(){
        return this.montoTotal;
    }
    set cambiarMetodoDePago(metodoDePago){
        this.metodoDePago = metodoDePago;
    }
    get mostrarMetodoDePago(){
        return this.metodoDePago;
    }
}