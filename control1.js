var x = 0;
var y = 0;
var k = 0;
let current = 0; 
focusableElements = document.querySelectorAll('button, area, iframe');
console.log(focusableElements);
const rAF = window.mozRequestAnimationFrame || window.requestAnimationFrame; 
window.addEventListener('gamepadconnected', event => {
    console.log('Gamepad conectado');
    console.log(event.gamepad);
    update();
})

window.addEventListener('gamepaddisconnected', event => {
    console.log('Gamepad desconectado');
    console.log(event.gamepad);
})

function update () {
    const gamepads = navigator.getGamepads ();
    if (gamepads [0]) {
      if (gamepads [0] .axes [9] .toFixed(3) == -0.429) { //Derecha
        k = k + 1 ;
        current = k % focusableElements.length;
        focusableElements[current].focus(); 
      }
   
      if (gamepads [0] .axes [4] .toFixed(3) == -1.000) { //Izquierda
        x = x - 4;
        k = k - 1 ;
        if(k==-1){
          k = focusableElements.length;
        }
        current = k % focusableElements.length;
        focusableElements[current].focus();   
      }
      if (gamepads [0] .axes [5] .toFixed(3) == 1.000) { //Arriba
        y = y + 4;
        k = k - 3 ;
        if(k==-2){
          k = 4;
        }
        if(k==-3){
          k = 3;
        }
        if(k==-1){
          k = 5;
        }
        current = k % focusableElements.length;
        focusableElements[current].focus(); 
      }
      if (gamepads [0] .axes [9] .toFixed(3) == 0.143) { //Abajo
        k = k + 3 ;
        current = k % focusableElements.length;
        focusableElements[current].focus(); 
      }
   if(gamepads [0] .buttons [2] .pressed){
    // document.getElementById(btn[current]).click();
    focusableElements[current].click(); 
   }
  setTimeout(() => rAF(update), 180)
}
}
// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player("video", {
    events: {
      // call this function when player is ready to use
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    player.playVideo();
  });

  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function () {
    player.pauseVideo();
  });
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



      //Mapeo Tapete
      // gamepads [0] .buttons [2] .pressed//Derecha
      // gamepads [0] .buttons [3] .pressed//Izquierda
      // gamepads [0] .buttons [0] .pressed//Arriba
      // gamepads [0] .buttons [1] .pressed//Abajo  
