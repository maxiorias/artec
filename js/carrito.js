const llenarCarrito = () => { 

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    
    modalContainer.append(modalHeader);
    
    const modalButton = document.createElement("h3")
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";
    
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    
    modalHeader.append(modalButton);
    
    
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="precioModal">$${product.precio}</p>
        <p class="cantidadModal">Cantidad: ${product.cantidad} </p>
        `;
        
        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");

        eliminar.innerHTML = `<span class="fa-solid fa-trash"></span>` 
        eliminar.className = "borrar-producto";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
        
    });


    
    const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    
    const totalComprado = document.createElement("div");
    totalComprado.ClassName = "total-content";
    totalComprado.innerHTML = ` <h3>total a pagar: $ ${total}</h3>`;
    modalContainer.append(totalComprado);
    
}

verCarrito.addEventListener("click", llenarCarrito);

// funcion eliminar producto 

const eliminarProducto = () => {
  const foundId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  llenarCarrito();
};

const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;

};

