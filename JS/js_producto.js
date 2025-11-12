
// componente mejorado
const producto = [
  {nombre:"tralalero", precio:20, img:"https://plastiverseoficial.com/cdn/shop/files/F_TRALALERO_TRALALA_1-min.webp?v=1747762150"},
  {nombre:"alien", precio:90, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqef0nL1QXRuT2RLCR7liEpxU-M9eIHsk6g&s"}
  
];
const contenedor = document.getElementById("contenedor")

producto.forEach( prod =>{
  const card = document.createElement("div");
  card.className="card";
  card.innerHTML = `
    <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>
        `;
contenedor.appendChild(card);

});


