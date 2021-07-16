class Cliente{
    constructor(nombre, apellido, correo, contrasena, montoTotal, metodoDePago, pedido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contrasena = contrasena;
        this.montoTotal = montoTotal;
        this.metodoDePago = metodoDePago;
        this.pedido = pedido;
    };
    get mostrarNombre(){
        return this.nombre;
    }
    set registroNombre(nombre){
        this.nombre = nombre;
    }
    get mostrarApellido(){
        return this.apellido;
    }
    set registroApellido(apellido){
        this.apellido = apellido;
    }
    get mostrarCorreo(){
        return this.correo;
    }
    set registroCorreo(correo){
        this.correo = correo;
    }
    get mostrarContrasena(){
        return this.contrasena;
    }
    set registroContrasena(contrasena){
        this.contrasena = contrasena;
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
    set registroMetodoDePago(metodoDePago){
        this.metodoDePago = metodoDePago;
    }
    set AgregoProducto(producto){
        this.pedido.push()
    }
    set guardoPedido(pedido){
        this.pedido = pedido;
    }
}