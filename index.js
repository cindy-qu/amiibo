
const amiiboSpan = document.querySelector('#namesList')



amiiboSpan.addEventListener('click', e => {
    const amiiboName = document.querySelector('#name')
    amiiboName.textContent = `Name: ${amiibo.name}`



    const amiiboGameSeries= document.querySelector('#gameseries')
    amiiboGameSeries.textContent = `Game Series: ${amiibo.gameSeries}`

    const amiiboReleaseDate= document.querySelector('#releasedate')
    amiiboReleaseDate.textContent= `N. America Release date: ${amiibo.release.na}`
    
    const amiiboType= document.querySelector('#type')
    amiiboType.textContent = `Type: ${amiibo.type}`



    const image = document.querySelector("#image")
    image.src = amiibo.image
})


fetch('http://localhost:3000/amiibo')
.then(res => res.json())
.then(character => {
    character.forEach(amiibo =>{

    //Amiibo Names
    const amiiboList = document.querySelector('#namesList')
  const newList = document.createElement('span')
  newList.textContent = amiibo.name

  amiiboList.append(newList)


     //Amiibo Details   
    const amiiboName = document.querySelector('#name')
    amiiboName.textContent = `Name: ${amiibo.name}`



    const amiiboGameSeries= document.querySelector('#gameseries')
    amiiboGameSeries.textContent = `Game Series: ${amiibo.gameSeries}`

    const amiiboReleaseDate= document.querySelector('#releasedate')
    amiiboReleaseDate.textContent= `N. America Release date: ${amiibo.release.na}`
    
    const amiiboType= document.querySelector('#type')
    amiiboType.textContent = `Type: ${amiibo.type}`



    const image = document.querySelector("#image")
    image.src = amiibo.image
    
    

    
})

})