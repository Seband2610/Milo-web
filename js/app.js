// alert("Inventario Milo ha iniciado");

let inventario = [];

// Productos iniciales
let producto1 = {
  nombre: "Arroz",
  precio: 5000,
  cantidad: 3,
};

let producto2 = {
  nombre: "Leche",
  precio: 3000,
  cantidad: 2,
};

inventario.push(producto1);
inventario.push(producto2);

console.log("Sistema iniciado con productos base:");
console.log(inventario);

// Mostrar inventario
function mostrarInventario() {
  console.log("Inventario:");

  for (let i = 0; i < inventario.length; i++) {
    console.log(
      `Nombre: ${inventario[i].nombre} | Precio: ${inventario[i].precio} | Cantidad: ${inventario[i].cantidad}`
    );
  }
}

mostrarInventario();

// Agregar producto
function agregarProducto() {
  let nombre = prompt("Ingrese el nombre del producto:");
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

  let nuevoProducto = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad,
  };

  inventario.push(nuevoProducto);

  console.log("Producto agregado correctamente");
  mostrarInventario();
}

// Buscar producto
function buscarProducto() {
  let nombreBusqueda = prompt("Ingrese el nombre del producto a buscar:");
  let encontrado = false;

  for (let i = 0; i < inventario.length; i++) {
    if (
      inventario[i].nombre.toLowerCase() === nombreBusqueda.toLowerCase()
    ) {
      console.log(
        `Producto encontrado: Nombre: ${inventario[i].nombre} | Precio: ${inventario[i].precio} | Cantidad: ${inventario[i].cantidad}`
      );
      encontrado = true;
      return;
    }
  }

  if (!encontrado) {
    console.log("Producto no encontrado.");
  }
}