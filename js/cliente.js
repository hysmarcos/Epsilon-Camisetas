class Cliente{
    constructor(saldo, montoTotal, metodoDePago, pedido){
        this.saldo = saldo;
        this.montoTotal = montoTotal;
        this.metodoDePago = metodoDePago;
        this.pedido = pedido;
    };
    get mostrarSaldo(){
        return (`El monto total es de $${this.montoTotal}, y su saldo restante es de $${this.saldo}.`)
    }
    set cambiarMetodoDePago(metodoDePago){
        this.metodoDePago = metodoDePago;
    }
}