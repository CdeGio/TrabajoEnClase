
// componente mejorado
const producto = [
  {nombre:"Tralalero", precio:20, img:"https://plastiverseoficial.com/cdn/shop/files/F_TRALALERO_TRALALA_1-min.webp?v=1747762150"},
  {nombre:"Gato alien", precio:90, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqef0nL1QXRuT2RLCR7liEpxU-M9eIHsk6g&s"},
  {nombre:"Perro alien", precio:90, img:"https://media.tenor.com/aiflnzA2GNcAAAAm/gog-alien.webp"},
  {nombre:"Larry", precio:90, img:"https://preview.redd.it/why-is-larry-so-evil-v0-ty3qlu4swjle1.jpeg?width=640&crop=smart&auto=webp&s=fd05509d265dbbb4572db1db73540b769a5e6b64"}

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


