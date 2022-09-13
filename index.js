
const amiiboSpan = document.querySelector('#namesList')

const amiiboName = document.querySelector('#name')
const amiiboGameSeries= document.querySelector('#gameseries')
const amiiboReleaseDate= document.querySelector('#releasedate')
const amiiboType= document.querySelector('#type')
const image = document.querySelector("#image")


const wishlist = document.querySelector('#wishlist')
    wishlist.addEventListener('click', e => {
   
        wishlist.textContent = "★ Added to Wishlist"

        e.target.style.color = 'yellow';

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
    // const amiiboName = document.querySelector('#name')
    // amiiboName.textContent = `Name: ${amiibo.name}`



    // const amiiboGameSeries= document.querySelector('#gameseries')
    // amiiboGameSeries.textContent = `Game Series: ${amiibo.gameSeries}`

    // const amiiboReleaseDate= document.querySelector('#releasedate')
    // amiiboReleaseDate.textContent= `N. America Release date: ${amiibo.release.na}`
    
    // const amiiboType= document.querySelector('#type')
    // amiiboType.textContent = `Type: ${amiibo.type}`



    // const image = document.querySelector("#image")
    // image.src = amiibo.image
    
    
   newList.addEventListener('click', e => {
    
        amiiboName.textContent = `Name: ${amiibo.name}`
    
        amiiboGameSeries.textContent = `Game Series: ${amiibo.gameSeries}`
    
        amiiboReleaseDate.textContent= `N. America Release date: ${amiibo.release.na}`
        
        amiiboType.textContent = `Type: ${amiibo.type}`
    
        image.src = amiibo.image
    })
    


    
    
})

})