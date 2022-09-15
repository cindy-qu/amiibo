
const amiiboSpan = document.querySelector('#namesList')

const amiiboName = document.querySelector('#name')
const amiiboGameSeries= document.querySelector('#gameseries')
const amiiboReleaseDate= document.querySelector('#releasedate')
const amiiboType= document.querySelector('#type')
const image = document.querySelector("#image")


//Thumbsup and Thumbsdown Button
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

  

//Fetch request
fetch('https://amiiboapi.com/api/amiibo/')
.then(res => res.json())
.then(character => {
    renderAmiibo(character.amiibo);
    renderMario(character.amiibo[0])
})

//Function to set default image to the first character on the database list
function renderMario(character){
    amiiboName.textContent = `${character.name}`;
    image.src = character.image
    image.addEventListener('click', e => {
        amiiboGameSeries.textContent = `Game Series: ${character.gameSeries}`
        amiiboReleaseDate.textContent= `North America Release date: ${character.release.na}`
        amiiboType.textContent = `Type: ${character.type}`
    })
}



//Function to render Amiibo details for each name
function renderAmiibo(character){
    character.forEach(amiibo =>{

    //Amiibo Names
    const amiiboList = document.querySelector('#namesList')
    const newList = document.createElement('span')
    newList.id = 'hovercolor'
    newList.textContent = amiibo.name

    amiiboList.append(newList)


    //Click on name to render Amiibo name and image
    newList.addEventListener('click', e => {
    
        amiiboName.textContent = `${amiibo.name}`
        image.src = amiibo.image

        //Click on image to show Amiibo series, release date, and type
        image.addEventListener('click', e => {
            amiiboGameSeries.textContent = `Game Series: ${amiibo.gameSeries}`
            amiiboReleaseDate.textContent= `North America Release date: ${amiibo.release.na}`
            amiiboType.textContent = `Type: ${amiibo.type}`
        })
     
    })

    //Event listener to hide the Amiibo details when you click on a different name
    newList.addEventListener('click', e => {
        amiiboGameSeries.textContent = ""

        amiiboReleaseDate.textContent= ""
        amiiboType.textContent = ""
    })
    
})

}