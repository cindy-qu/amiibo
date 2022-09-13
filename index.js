
const amiiboSpan = document.querySelector('#namesList')

const amiiboName = document.querySelector('#name')
const amiiboGameSeries= document.querySelector('#gameseries')
const amiiboReleaseDate= document.querySelector('#releasedate')
const amiiboType= document.querySelector('#type')
const image = document.querySelector("#image")


// const wishlist = document.querySelector('#wishlist')
//     wishlist.addEventListener('click', e => {
   
//         wishlist.textContent = "♥"

//         e.target.style.color = 'yellow';
        
//     })
const btn1 = document.querySelector('#green');
const btn2 = document.querySelector('#red');

btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});

  


fetch('http://localhost:3000/amiibo')
.then(res => res.json())
.then(character => {
    renderAmiibo(character);
    console.log(character[0])

})

function renderAmiibo(character){
    character.forEach(amiibo =>{

    //Amiibo Names
    const amiiboList = document.querySelector('#namesList')
    
    const newList = document.createElement('span')
    
    newList.textContent = amiibo.name

    amiiboList.append(newList)


    
    newList.addEventListener('click', e => {
    
        amiiboName.textContent = `Name: ${amiibo.name}`
    
        // amiiboGameSeries.textContent = `Game Series: ${amiibo.gameSeries}`
    
        // amiiboReleaseDate.textContent= `N. America Release date: ${amiibo.release.na}`
        
        // amiiboType.textContent = `Type: ${amiibo.type}`
    
        image.src = amiibo.image

        image.addEventListener('click', e => {
            // amiiboName.textContent = `Name: ${amiibo.name}`
            
            amiiboGameSeries.textContent = `Game Series: ${amiibo.gameSeries}`
        
            amiiboReleaseDate.textContent= `N. America Release date: ${amiibo.release.na}`
            
            amiiboType.textContent = `Type: ${amiibo.type}`

           
           
        })
     
    })
    newList.addEventListener('click', e => {
        amiiboGameSeries.textContent = ""

        amiiboReleaseDate.textContent= ""
        amiiboType.textContent = ""
    })
    
})

}