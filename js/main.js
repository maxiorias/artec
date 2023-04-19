const seccionShop = document.getElementById("seccionShop");

const productos = [{
        id: 1,
        nombre: "NOTEBOOK LENOVO IDEAPAD 3 14IML05 I5 10210U 8GB SSD 256GB 14 W11",
        precio: 309990,
        img: "https://www.venex.com.ar/products_images/1673621998_lenovo.jpg",
    },
    {
        id: 2,
        nombre: "NOTEBOOK CX 30382 I7 1165G7 8GB SSD 240GB 15.6 FREE",
        precio: 289990,
        img: "https://www.venex.com.ar/products_images/1678122171_i7-240.jpg",
    },
    {
        id: 3,
        nombre: "NOTEBOOK LENOVO V15 PENTIUM N5030 4GB 1TB 15.6",
        precio: 179999,
        img: "https://www.venex.com.ar/products_images/1605283384_notebooklenovov15pentiumn50304gb1tb15.6.jpg",
    },
    {
        id: 4,
        nombre: "NOTEBOOK APPLE MACBOOK PRO M1 13 8GB 512GB SPACE GREY",
        precio: 849990,
        img: "https://www.venex.com.ar/products_images/1647543406_mac.jpg",
    },
    {
        id: 5,
        nombre: "NOTEBOOK BANGHO BES T4 INTEL CORE I5 1021U 8GB SSD 240GB 14 FREE",
        precio: 503984,
        img: "https://www.venex.com.ar/products_images/1664995442_cuca.jpg",
    },
    {
        id: 6,
        nombre: "PC INTEL I3 12100 8GB SSD 240GB + MONITOR 22",
        precio: 254089,
        img: "https://www.venex.com.ar/products_images/1655151387_pc-intel-i3-12100-8gb-ssd-240gb-+-monitor-22.jpg",
    },
    {
        id: 7,
        nombre: "PC AMD RYZEN 5 5600G 16GB SSD 240GB",
        precio: 194029,
        img: "https://www.venex.com.ar/products_images/1659379310_1656441054_ew.jpg",
    },
    {
        id: 8,
        nombre: "PC INTEL I5 12400 SSD 240GB 16GB",
        precio: 230989,
        img: "https://www.venex.com.ar/products_images/1655151222_pc-intel-i5-12400-ssd-240gb-16gb.jpg",
    },
    {
        id: 9,
        nombre: "PC INTEL I7 10700 SSD 240GB 8GB",
        precio: 265639,
        img: "https://www.venex.com.ar/products_images/1659975171_fsdfsd.png",
    },
    {
        id: 10,
        nombre: "PC INTEL GAMER KAIROS I5 10400F 16GB SSD 240GB GTX 1660TI 6GB",
        precio: 415349,
        img: "https://www.venex.com.ar/products_images/1678893558_pc3.png"
    },
]

let carrito =[];

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
});