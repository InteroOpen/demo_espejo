var x = 0;
var y = 0;
var k = 0;
let current = 0; 
var btn = ["brazo", "cardio", "pierna", "abdomen", "espalda", "elastico"];
 focusableElements = document.querySelectorAll(
'button'
);
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
        x = x + 4;
        k = k + 1 ;
        current = k % btn.length;
        console.log(current);
        console.log ('movido', x);
        // document.getElementById(btn[current]).focus(); 
        focusableElements[current].focus(); 
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
        // document.getElementById(btn[current]).focus();
        focusableElements[current].focus();   
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
        // document.getElementById(btn[current]).focus(); 
        focusableElements[current].focus(); 
      }
      if (gamepads [0] .axes [9] .toFixed(3) == 0.143) { //Abajo
        y = y - 4;
        console.log ('movido', y);
        console.log(current);
        k = k + 3 ;
        current = k % btn.length;
        // document.getElementById(btn[current]).focus();  
        focusableElements[current].focus(); 
      }
   if(gamepads [0] .buttons [2] .pressed){
    // document.getElementById(btn[current]).click();
    focusableElements[current].click(); 
   }
  // if (gamepads [0] .buttons [3] .pressed) { //Derecha
  //   x = x + 4;
  //   k = k + 1 ;
  //   current = k % btn.length;
  //   console.log(current);
  //   console.log ('movido', x);
  //   // document.getElementById(btn[current]).focus(); 
  //   focusableElements[current].focus(); 
  // }
  // if (gamepads [0] .buttons [2] .pressed) { //Izquierda
  //       x = x - 4;
  //       k = k - 1 ;
  //       if(k==-1){
  //         k = 5;
  //       }
  //       current = k % btn.length;
  //       console.log(current);
  //       console.log ('movido', x);
  //       // document.getElementById(btn[current]).focus();
  //       focusableElements[current].focus();   
  //     }
  // if (gamepads [0] .buttons [0] .pressed) { //Arriba
  //       y = y + 4;
  //       k = k - 3 ;
  //       if(k==-2){
  //         k = 4;
  //       }
  //       if(k==-3){
  //         k = 3;
  //       }
  //       if(k==-1){
  //         k = 5;
  //       }
  //       current = k % btn.length;
  //       console.log(current);
  //       console.log ('movido', y);
  //       // document.getElementById(btn[current]).focus(); 
  //       focusableElements[current].focus(); 
  //     }
  //     if (gamepads [0] .buttons [1] .pressed) { //Abajo
  //       y = y - 4;
  //       console.log ('movido', y);
  //       console.log(current);
  //       k = k + 3 ;
  //       current = k % btn.length;
  //       // document.getElementById(btn[current]).focus();  
  //       focusableElements[current].focus(); 
  //     }
  //     if(gamepads [0] .buttons [9] .pressed){
  //       // document.getElementById(btn[current]).click();
  //       focusableElements[current].click(); 
  //     //  }
  // }
  setTimeout(() => rAF(update), 100)
}
}

      //Mapeo Tapete
      // gamepads [0] .buttons [2] .pressed //Derecha
      // gamepads [0] .buttons [3] .pressed //Izquierda
      // gamepads [0] .buttons [0] .pressed //Arriba
      // gamepads [0] .buttons [1] .pressed //Abajo
      // gamepads [0] .buttons [8] .pressed //Back
      // gamepads [0] .buttons [9] .pressed //Start
      
