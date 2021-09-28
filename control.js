var x = 0;
var y = 0;
const focusableElements = document.querySelectorAll(
'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);
const rAF = window.mozRequestAnimationFrame || window.requestAnimationFrame; 
window.addEventListener('gamepadconnected', event => {
    console.log('Gamepad conectado');
    console.log(event.gamepad);
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
      // console.log(gamepads [0] .axes [9] .toFixed(3));
      // if (gamepads [0] .buttons [0] .pressed) {
      //   y = y + 4;
      //   console.log ('movido', y);
      // }
      if (gamepads [0] .axes [9] .toFixed(3) == -0.429) {
        x = x + 4;
        console.log ('movido', x);
        document.getElementById("btn_1").focus();
      }
      if (gamepads [0] .axes [9] .toFixed(3) == 0.714) {
        x = x - 4;
        console.log ('movido', x);
      }
      if (gamepads [0] .axes [9] .toFixed(3) == -1.000) {
        y = y + 4;
        console.log ('movido', y);
      }
      if (gamepads [0] .axes [9] .toFixed(3) == 0.143) {
        y = y - 4;
        console.log ('movido', y);
    }

      }


    window.requestAnimationFrame (update);
  }

  window.requestAnimationFrame (update)

//   window.addEventListener('gamepadconnected', function() {
//     updateLoop();
//   }); 
  
//   function updateLoop() {
//     // check button states
//     rAF(updateLoop);
//   }
//   let current;

// function updateLoop() {
//   const gamepad = navigator.getGamepads()[0]
//   const gamepadBumperL = gamepad.buttons[4]
//   const gamepadBumperR = gamepad.buttons[5]
  
//   if (gamepadBumperL.pressed) { prevItem(current) }
//   if (gamepadBumperR.pressed) { nextItem(current) }
  
//   setTimeout(() => rAF(updateLoop), 100)
// }

// function prevItem(index) {
//   current = (index - 1) % focusableElements.length
//   focusableElements[current].focus()
// }

// function nextItem(index) {
//   current = (index + 1) % focusableElements.length
//   focusableElements[current].focus()
// }
