const seccionShop = document.getElementById("seccionShop");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");


let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "tarjeta";
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="precio">$${product.precio}</p>
    `;


    seccionShop.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);


    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
   `;

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h3")
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalHeader.append(modalButton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
     <img src="${product.img}">
     <h3>${product.nombre}</h3>
     <p class="precioModal">$${product.precio}</p>
   `;

        modalContainer.append(carritoContent);

    });

    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    
    const totalComprado = document.createElement("div");
    totalComprado.ClassName = "total-content";
    totalComprado.innerHTML = ` <h3>total a pagar: $ ${total}</h3>`;
    modalContainer.append(totalComprado);
});