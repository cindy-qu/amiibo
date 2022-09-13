
const amiiboSpan = document.querySelector('#namesList')

const amiiboName = document.querySelector('#name')
const amiiboGameSeries= document.querySelector('#gameseries')
const amiiboReleaseDate= document.querySelector('#releasedate')
const amiiboType= document.querySelector('#type')
const image = document.querySelector("#image")





fetch('http://localhost:3000/amiibo')
.then(res => res.json())
.then(character => {
    character.forEach(amiibo =>{

    //Amiibo Names
    const amiiboList = document.querySelector('#namesList')
    
  const newList = document.createElement('span')
  
  newList.textContent = amiibo.name

  amiiboList.append(newList)



    newList.addEventListener('click', e => {
    
        amiiboName.textContent = `Name: ${amiibo.name}`
    
        amiiboGameSeries.textContent = `Game Series: ${amiibo.gameSeries}`
    
        amiiboReleaseDate.textContent= `N. America Release date: ${amiibo.release.na}`
        
        amiiboType.textContent = `Type: ${amiibo.type}`
    
        image.src = amiibo.image
    })
   newList.addEventListener('click', e => {
    
        amiiboName.textContent = `Name: ${amiibo.name}`
    
        amiiboGameSeries.textContent = `Game Series: ${amiibo.gameSeries}`
    
        amiiboReleaseDate.textContent= `N. America Release date: ${amiibo.release.na}`
        
        amiiboType.textContent = `Type: ${amiibo.type}`
    
        image.src = amiibo.image
    })
    


    
})

})