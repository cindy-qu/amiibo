fetch('http://localhost:3000/amiibo')
.then(res => res.json())
.then(character => {
    // character.forEach(amiibo =>{console.log(amiibo.name)})

    const amiiboName = document.querySelector('#name')
    amiiboName.textContent = `Name: ${character[0].name}`



    const amiiboGameSeries= document.querySelector('#gameseries')
    amiiboGameSeries.textContent = `Game Series: ${character[0].gameSeries}`

    const amiiboReleaseDate= document.querySelector('#releasedate')
    amiiboReleaseDate.textContent= `N. America Release date: ${character[0].release.na}`
    
    const amiiboType= document.querySelector('#type')
    amiiboType.textContent = `Type: ${character[0].type}`



    const image = document.querySelector("#image")
    image.src = character[0].image
    
    const amiibo = character.name

    


})