
let bestPokemonId = 384

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
        console.log(res.data)
        let name = res.data.species.name
        name = "Name: " + name.charAt(0).toUpperCase() + name.slice(1)
        let type = res.data.types[0].type.name
        type = "Type: " + type.charAt(0).toUpperCase() + type.slice(1)
        let id = "Id: " + res.data.id
        let spriteImg = res.data.sprites.front_default
        
        const content = document.getElementById('pokemonContent')
        content.textContent = ""
        let nameDiv = document.createElement('div')
        let typeDiv = document.createElement('div')
        let idDiv = document.createElement('div')
        let spriteImgDiv = document.createElement('img')

        nameDiv.textContent = name
        typeDiv.textContent = type
        idDiv.textContent = id
        spriteImgDiv.src = spriteImg

        content.appendChild(nameDiv)
        content.appendChild(typeDiv)
        content.appendChild(idDiv)
        content.appendChild(spriteImgDiv)

    })
}

const bestPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${bestPokemonId}`)
    .then(res => {
        console.log(res.data)
        let name = res.data.species.name
        name = "Name: " + name.charAt(0).toUpperCase() + name.slice(1)
        let type = res.data.types[0].type.name
        type = "Type: " + type.charAt(0).toUpperCase() + type.slice(1)
        let id = "Id: " + res.data.id
        let spriteImg = res.data.sprites.front_default
        
        const content = document.getElementById('bestPokemonContent')
        content.textContent = ""
        let nameDiv = document.createElement('div')
        let typeDiv = document.createElement('div')
        let idDiv = document.createElement('div')
        let spriteImgDiv = document.createElement('img')

        nameDiv.textContent = name
        typeDiv.textContent = type
        idDiv.textContent = id
        spriteImgDiv.src = spriteImg

        content.appendChild(nameDiv)
        content.appendChild(typeDiv)
        content.appendChild(idDiv)
        content.appendChild(spriteImgDiv)

    })
}

document.getElementById('fortuneButton').addEventListener('click', fortuneButton )
document.getElementById('kanyeButton').addEventListener('click', kanyeQuote)
document.getElementById('randomPokemon').addEventListener('click', randomPokemon)
document.getElementById('bestPokemon').addEventListener('click', bestPokemon)