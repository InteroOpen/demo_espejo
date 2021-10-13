var x = 0;
var y = 0;
var k = 0;
let current = 0; 
var btn = ["brazo", "cardio", "pierna", "abdomen", "espalda", "elastico"];
focusableElements = document.querySelectorAll('button');
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
      const gamepadState = {
        id: gamepads [0] .id,
        ejes: [
          gamepads [0] .axes [0] .toFixed (2),
          gamepads [0] .axes [1] .toFixed (2),
          gamepads [0] .axes [2] .toFixed (2),
          gamepads [0] .axes [3] .toFixed (2),
          gamepads [0] .axes [4] .toFixed (2),
          gamepads [0] .axes [5] .toFixed (2),
          gamepads [0] .axes [6] .toFixed (2),
          gamepads [0] .axes [7] .toFixed (2),
          gamepads [0] .axes [8] .toFixed (2),
          gamepads [0] .axes [9] .toFixed (2),
        ],
        botones: [
          {button_0: gamepads [0] .buttons [0] .pressed},
          {button_1: gamepads [0] .buttons [1] .pressed},
          {button_2: gamepads [0] .buttons [2] .pressed},
          {button_3: gamepads [0] .buttons [3] .pressed},
          {button_4: gamepads [0] .buttons [4] .pressed},
          {button_5: gamepads [0] .buttons [5] .pressed},
          {button_6: gamepads [0] .buttons [6] .pressed},
          {button_7: gamepads [0] .buttons [7] .pressed},
          {button_8: gamepads [0] .buttons [8] .pressed},
          {button_9: gamepads [0] .buttons [9] .pressed},
          {button_10: gamepads [0] .buttons [10] .pressed},
          {button_11: gamepads [0] .buttons [11] .pressed},
          {button_12: gamepads [0] .buttons [12] .pressed},
          {button_13: gamepads [0] .buttons [13] .pressed},
        ]
      }
      const flechas = gamepads [0] .axes [9] .toFixed (3); // Flechas para izquierda o derecha
      console.log(flechas);
      if (gamepads [0] .axes [9] .toFixed(3) == -0.429) { //Derecha
        x = x + 4;
        k = k + 1 ;
        current = k % btn.length;
        console.log(current);
        console.log ('movido', x);
        document.getElementById(btn[current]).focus();  
      }
   
      if (gamepads [0] .axes [9] .toFixed(3) == 0.714) { //Izquierda
        x = x - 4;
        k = k - 1 ;
        if(k==-1){
          k = 5;
        }
        current = k % btn.length;
        console.log(current);
        console.log ('movido', x);
        document.getElementById(btn[current]).focus();  
      }
      if (gamepads [0] .axes [9] .toFixed(3) == -1.000) { //Arriba
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
        current = k % btn.length;
        console.log(current);
        console.log ('movido', y);
        document.getElementById(btn[current]).focus(); 
      }
      if (gamepads [0] .axes [9] .toFixed(3) == 0.143) { //Abajo
        y = y - 4;
        console.log ('movido', y);
        console.log(current);
        k = k + 3 ;
        current = k % btn.length;
        document.getElementById(btn[current]).focus();  
      }
   if(gamepads [0] .buttons [2] .pressed){
    document.getElementById(btn[current]).click();
   }
  }
  setTimeout(() => rAF(update), 100)
}

