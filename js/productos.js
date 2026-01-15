const productos = [{ codigo: "JM001", categoria: "Juegos de Mesa", nombre: "Catan", precio: 29990 },
    { codigo: "JM002", categoria: "Juegos de Mesa", nombre: "Carcassonne", precio: 24990 },
    { codigo: "AC001", categoria: "Accesorios", nombre: "Controlador Inalámbrico Xbox Series X", precio: 59990 },
    { codigo: "AC002", categoria: "Accesorios", nombre: "Auriculares Gamer HyperX Cloud II", precio: 79990 },
    { codigo: "CO001", categoria: "Consolas", nombre: "PlayStation 5", precio: 549990 },
    { codigo: "CG001", categoria: "Computadores Gamers", nombre: "PC Gamer ASUS ROG Strix", precio: 1299990 },
    { codigo: "SG001", categoria: "Sillas Gamers", nombre: "Silla Gamer Secretlab Titan", precio: 349990 },
    { codigo: "MS001", categoria: "Mouse", nombre: "Mouse Gamer Logitech G502 HERO", precio: 49990 },
    { codigo: "MP001", categoria: "Mousepad", nombre: "Mousepad Razer Goliathus Extended Chroma", precio: 29990 },
    { codigo: "PP001", categoria: "Poleras Personalizadas", nombre: "Polera Gamer Personalizada 'Level-Up'", precio: 14990 }]

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');

// Funcion mostrar productos
function mostrarProductos() {
  productList.innerHTML = '';
  productos.forEach(producto => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <strong>${producto.nombre}</strong><br>
      Categoría: ${producto.categoria}<br>
      Precio: $${producto.precio}<br>
      <button onclick="agregarAlCarrito('${producto.codigo}')">Agregar al carrito</button>
    `;
    productList.appendChild(div);
  });
}

// Funcion Agregar Carrito
function agregarAlCarrito(codigo) {
  const producto = productos.find(p => p.codigo === codigo);
  const item = carrito.find(i => i.codigo === codigo);

  if (item) {
    item.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();
  mostrarCarrito();
}

// Disminuir cantidad 
function disminuirCantidad(codigo) {
  const item = carrito.find(i => i.codigo === codigo);
  if (item) {
    item.cantidad -= 1;
    if (item.cantidad <= 0) {
      carrito = carrito.filter(i => i.codigo !== codigo);
    }
    guardarCarrito();
    mostrarCarrito();
  }
}

// Eliminar del carrito
function eliminarDelCarrito(codigo) {
  carrito = carrito.filter(item => item.codigo !== codigo);
  guardarCarrito();
  mostrarCarrito();
}

// Vaciar carrito completamente
function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  mostrarCarrito();
}

// Guardar en localStorage
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Mostrar carrito
function mostrarCarrito() {
  cartList.innerHTML = '';

  if (carrito.length === 0) {
    cartList.innerHTML = '<p>El carrito está vacío.</p>';
    return;
  }

  carrito.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <strong>${item.nombre}</strong><br>
      Precio: $${item.precio} x ${item.cantidad} = $${item.precio * item.cantidad}<br>
      <button onclick="agregarAlCarrito('${item.codigo}')">+</button>
      <button onclick="disminuirCantidad('${item.codigo}')">-</button>
      <button onclick="eliminarDelCarrito('${item.codigo}')">Eliminar</button>
    `;
    cartList.appendChild(div);
  });

  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  cartList.innerHTML += `<h3>Total: $${total}</h3>`;
}

// Inicializar
mostrarProductos();
mostrarCarrito();