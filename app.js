const btn =document.querySelector('button');
const joker =document.getElementById('joker');


const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

let getJoke = ()=>{
    btn.style.backgroundColor ='pink' 
    joker.classList.remove('fade');
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        joker.innerHTML =`${item.joke}`;
        joker.classList.add('fade');
        btn.style.backgroundColor ='yellow' 
    });
   
}

btn.addEventListener('click',getJoke)
