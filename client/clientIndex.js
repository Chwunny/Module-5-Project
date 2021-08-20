
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




document.getElementById('fortuneButton').addEventListener('click', fortuneButton )
document.getElementById('kanyeButton').addEventListener('click', kanyeQuote)