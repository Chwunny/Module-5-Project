// const basePhotoUrl = "/client/photos/"
let bestPokemonIds = [384, 151, 493, 38, 143, 157, 245, 25, 83, 135]

const types = {
    "bug" : "/client/photos/BugIC.png",
    "dark" : "/client/photos/DarkIC.png",
    "dragon" : "/client/photos/DragonIC.png",
    "electric" : "/client/photos/ElectricIC.png",
    "fairy" : "/client/photos/FairyIC.png",
    "fighting" : "/client/photos/FightingIC.png",
    "fire" : "/client/photos/FireIC.png",
    "flying" : "/client/photos/FlyingIC.png",
    "ghost" : "/client/photos/GhostIC.png",
    "grass" : "/client/photos/GrassIC.png",
    "ground" : "/client/photos/GroundIC.png",
    "ice" : "/client/photos/IceIC.png",
    "normal" : "/client/photos/NormalIC.png",
    "poison" : "/client/photos/PoisonIC.png",
    "psychic" : "/client/photos/PsychicIC.png",
    "rock" : "/client/photos/RockIC.png",
    "steel" : "/client/photos/SteelIC.png",
    "water" : "/client/photos/WaterIC.png"
}

const fortuneButton = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then( res => {
        alert(res.data)
    });
}

const kanyeQuote = () => {
    axios.get("https://api.kanye.rest")
    .then(res => {
        alert(res.data.quote + " -Kanye")
    })
}

const randomPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 898)}`)
    .then(res => {
        document.getElementById('shinyPokemon').style.zIndex = 1

        console.log(res.data)
        let name = res.data.species.name
        name = name.charAt(0).toUpperCase() + name.slice(1)
        let type = res.data.types[0].type.name
        // type = "Type: " + type.charAt(0).toUpperCase() + type.slice(1)
        let id =  '#' + res.data.id
        let spriteImg = res.data.sprites.front_default
        let shinyImg = res.data.sprites.front_shiny

        document.getElementById('nameBox2').textContent = name
        document.getElementById('nameBox1').textContent =  id + ' ' + name
        document.getElementById('defaultPokemon').src = spriteImg
        document.getElementById('shinyPokemon').src = shinyImg
        document.getElementById('selectedId').textContent = id
        
        for (const prop in types){
            if (type === prop){
                document.getElementById('typeBox').src = types[prop]
            }
        }
    })
}

const bestPokemon = () => {
    let randomIndex = Math.floor(Math.random() * bestPokemonIds.length)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${bestPokemonIds[randomIndex]}`)
    .then(res => {
        document.getElementById('shinyPokemon').style.zIndex = 1

        console.log(res.data)
        let name = res.data.species.name
        name = name.charAt(0).toUpperCase() + name.slice(1)
        let type = res.data.types[0].type.name
        // type = "Type: " + type.charAt(0).toUpperCase() + type.slice(1)
        let id = '#' + res.data.id
        let spriteImg = res.data.sprites.front_default
        let shinyImg = res.data.sprites.front_shiny

        document.getElementById('nameBox2').textContent = name
        document.getElementById('selectedId').textContent = id
        document.getElementById('nameBox1').textContent =  id + ' ' + name
        document.getElementById('defaultPokemon').src = spriteImg
        document.getElementById('shinyPokemon').src = shinyImg
        
        for (const prop in types){
            if (type === prop){
                document.getElementById('typeBox').src = types[prop]
            }
        }

    })
}

const getShiny = () => {
    document.getElementById('shinyPokemon').style.zIndex = 3
}

const getDefault = () => {
    document.getElementById('shinyPokemon').style.zIndex = 1
}

document.getElementById('fortuneButton').addEventListener('click', fortuneButton )
document.getElementById('kanyeButton').addEventListener('click', kanyeQuote)
document.getElementById('randomPokemon').addEventListener('click', randomPokemon)
document.getElementById('bestPokemon').addEventListener('click', bestPokemon)
document.getElementById('shinyButton').addEventListener('click', getShiny)
document.getElementById('defaultButton').addEventListener('click', getDefault)