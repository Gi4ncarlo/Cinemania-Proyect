class Producto {

    constructor(nombre, precio){
        this.nombre = nombre;   
        this.precio = precio;
}
}

class CarritoCompra {

    constructor() {
        this.carrito = [];
    }

    agregarProducto(producto){
        this.carrito.push(producto);
    }

    calcularTotal(){

        let total = 0;

        for (const item of this.carrito) {
            total += item.precio
        }

        return total;
    }

    aplicarDescuento(porcentaje){

        const total = this.calcularTotal();

        if (total <= 0) {
            throw new Error('No hay items en el carrito');
        }

        const descuento = (total * porcentaje) / 100;
        const totalConDescuento = total - descuento;

        
        return totalConDescuento;
    }
}

module.exports = { CarritoCompra, Producto };