var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];
var memoryGame = new MemoryGame(cards);


document.addEventListener("DOMContentLoaded", function(event) { 
  var html = '';
  let click = 0
  let guess = 0  
  let acum = []
  memoryGame.shuffleCards(cards)
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach(function(card) {
    card.onclick = function() {
      toggleClass(this,this.nextElementSibling);
      acum.push(this.parentNode)
      if(acum.length == 2){
        checkPair(acum)       
      }
      if(guess == 12){
        var timer = setInterval(myTimer, 500);
        function myTimer() {
        alert("Has ganado")
        clearInterval(timer)
      }      
      }
    }
  });

  function toggleClass(element,sibling){    
   element.className = 'front'
   sibling.className = 'back'
  }

  function checkPair(element){    
    
    if(element[0].getAttribute('data-card-name') == element[1].getAttribute('data-card-name')){
      guess += 1
      document.querySelector("#pairs_guessed").innerHTML=guess      
    }else{
      click +=1
      document.querySelector("#pairs_clicked").innerHTML=click
      var timer = setInterval(myTimer, 500);
      function myTimer() {
        guessFailed(element)
        clearInterval(timer);
      }      
      
    }    
    acum = []        
  }

  function guessFailed(element){
      element[0].childNodes[1].className = 'back'
      element[0].childNodes[3].className = 'front'
      element[1].childNodes[1].className = 'back'
      element[1].childNodes[3].className = 'front'
  }
});


