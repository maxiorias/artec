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
        <span class="restar"> - </span>
        <p class="cantidadModal">Cantidad: ${product.cantidad} </p>
        <span class="sumar"> + </span>
        `;
        
        modalContainer.append(carritoContent);


        let restar = carritoContent.querySelector(".restar");

        restar.addEventListener("click", () => {
            if(product.cantidad !== 1) {
                
                product.cantidad--;

            }
              saveLocal();
              llenarCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", () => {

            product.cantidad++;
            saveLocal();
            llenarCarrito();

        });
        
            

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
  contadorCarrito();
  saveLocal();
  llenarCarrito();
};

const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";

const carritoLength = carrito.length;

localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};

contadorCarrito();


