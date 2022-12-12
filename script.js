const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  setInterval(() => {
    data = {
      temperature: randomNumber(25,30)
    }
    console.log(data)
    document.getElementById("temp").innerHTML = data.temperature
  }, 1000 )
  
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  setInterval(() => {
    data = {
      temperature: randomNumber(25,30)
    }
    console.log(data)
    document.getElementById("temp2").innerHTML = data.temperature
  }, 1000 )
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  setInterval(() => {
    data = {
      temperature: randomNumber(25,30)
    }
    console.log(data)
    document.getElementById("temp3").innerHTML = data.temperature
  }, 1000 )