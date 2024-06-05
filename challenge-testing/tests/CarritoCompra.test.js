const { CarritoCompra, Producto } = require("../index");

describe("Carrito de Compra", () => {
  //1
  it("Debe agregar correctamente un producto al carrito", () => {
    const carrito = new CarritoCompra();
    const producto = new Producto("Zapatillas", 1000);
    carrito.agregarProducto(producto);
    expect(carrito.carrito).toContain(producto);
  });


  //2
  it("Debe calcular correctamente el total del carrito", () => {
    const carrito = new CarritoCompra();
    const producto1 = new Producto("Zapatillas", 1000);
    const producto2 = new Producto("Perfume", 1254);
    const producto3 = new Producto("Reloj", 3050);

    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    carrito.agregarProducto(producto3);

    expect(carrito.carrito.length).toBe(3);
    expect(carrito.calcularTotal()).toBe(1000 + 1254 + 3050);
  });

  //3
  it("Debe llamar a calcularTotal cuando se aplica un descuento", () => {
    const carrito = new CarritoCompra();
    const producto1 = new Producto("Zapatillas", 1000);
    const producto2 = new Producto("Perfume", 1254);

    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);

    // Mock de la función calcularTotal
    const calcularTotalMock = jest.spyOn(carrito, "calcularTotal");

    // Verificar que calcularTotal se llama al aplicar el descuento
    carrito.aplicarDescuento(10);

    expect(calcularTotalMock).toHaveBeenCalledTimes(1);
  });

  //4
  it("Debe lanzar un error si no hay items en el carrito al realizar descuento", () => {
    const carrito = new CarritoCompra();

    expect(() => carrito.aplicarDescuento(10)).toThrowError(
      "No hay items en el carrito"
    );
  });

  //5
  it("Debe aplicar correctamente el descuento al total del carrito", () => {
    const carrito = new CarritoCompra();
    const producto1 = new Producto("Zapatillas", 1000);
    const producto2 = new Producto("Perfume", 1254);
    const producto3 = new Producto("Reloj", 3050);

    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    carrito.agregarProducto(producto3);

    const final = carrito.aplicarDescuento(20);
  expect(carrito.calcularTotal() * 0.8).toEqual(final);
  });
});
