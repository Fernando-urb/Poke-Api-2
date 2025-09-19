//try => vas a intentar
// catch => si hay un error
//  como se que tengo que trabajar con una funcion asincronica , cuando tenes que comunicate con otra app

//obtener elemntos del dom

const searchbtn = document.getElementById("searchBtn");
const pokemonInput = document.getElementById("pokemonInput");
const pokemonCard = document.getElementById("pokemonCard");
const favoritesList = document.getElementById ("favoritesList");

const typeColores = {
    fire: "#FD7D24",
    water: "#4592C4",
    grass: "#9BCC50",
    electric: "#EED535",
    ice: "#51C4E7",
    fighting: "#D56723",
    poison: "#B97FC9",
    ground: "#AB9842",
    flying: "#3DC7EF",
    psychic: "#F366B9",
    bug: "#729F3F",
    rock: "#A38C21",
    ghost: "#7B62A3",
    dragon: "#53A4CF",
    dark: "#707070",
    steel: "#9EB7B8",
    fairy: "#FDB9E9",
    normal: "#A4ACAF"

}

searchbtn.addEventListener("click", () => {
    const name = pokemonInput.value.toLowerCase().trim();

    if (name) {
        fetchPokemon(name)
    }
})

// funcion para o

async function fetchPokemon(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error("Pokemon no encontrado");//sirve para mandar un msj de informacion
        const data = await response.json()//obtener los datos y transformarlo 
        renderPokemon(data);


    } catch (error) {
        // si hay un error se lo mostrramos al usuario 
        console.log(error.message);
        pokemonCard.innerHTML = `<p style="color:red;"> ${error.message}</p>`;
        pokemonCard.classList.remove("hidden")

    }

}
// //agregar evento permite añadir a favorito 
function renderPokemon(pokemon) {
  const types = pokemon.types.map(t => 
    `<span class="px-5 py-3 rounded text-white mr-2" style="background:${typeColores[t.type.name]}">${t.type.name}</span>`
  ).join('');

  const stats = pokemon.stats.map(s => 
    `<p><strong>${s.stat.name}:</strong> ${s.base_stat}</p>`
  ).join('');

  pokemonCard.innerHTML = `   
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h2 class="text-xl font-bold mt-2">${pokemon.name.toUpperCase()}</h2>
    <div class="types mt-2">${types}</div>
    <div class="stats mt-4">${stats}</div>
    <button class="add-fav mt-4 bg-yellow-400 px-4 py-2 rounded">Agregar a Favoritos</button>
  `;
  pokemonCard.classList.remove("hidden");

 
  const botonFav = document.querySelector(".add-fav");
  if (botonFav) {
    botonFav.addEventListener("click", () => addFavorites(pokemon));
  }
}

function getFavorites() {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
}

function saveFavorites(favorites) {
  localStorage.setItem("favoritos", JSON.stringify(favorites));
}

function addFavorites(pokemon) {
  const favorites = getFavorites();
  const existe = favorites.find(p => p.id === pokemon.id);

  if (!existe) {
    favorites.push({
      id: pokemon.id,
      name: pokemon.name,
      sprite: pokemon.sprites.front_default
    });
    saveFavorites(favorites);
    renderFavorites();
  }
}

function renderFavorites() {
  const favorites = getFavorites();
  favoritesList.innerHTML = favorites.map(p => `
    <div class="favorite-card">
      <img src="${p.sprite}" alt="${p.name}">
      <h3>${p.name.toUpperCase()}</h3>
      <button onclick="removeFavorite(${p.id})">Eliminar</button>
    </div>
  `).join('');
}



function removeFavorite(id){
  let favorites = getFavorites();
  favorites = favorites.filter (p=> p.id !== id)
  saveFavorites(favorites);
  renderFavorites();

}