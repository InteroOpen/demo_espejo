const rAF = window.mozRequestAnimationFrame || window.requestAnimationFrame; //Llama la función que constantemente checa el estado de los botones
const Direction = { //asinga el valor de la dirección de la flecha a la flecha
	flecha_arriba_izquierda: 'flecha_arriba_izquierda',
	flecha_arriba: 'flecha_arriba',
	flecha_arriba_derecha: 'flecha_arriba_derecha',
	flecha_centro_izquierda: 'flecha_centro_izquierda',
	flecha_central: 'flecha_central',
	flecha_centro_derecha: 'flecha_centro_derecha',
	flecha_abajo_izquierda: 'flecha_abajo_izquierda',
	flecha_abajo: 'flecha_abajo',
	flecha_abajo_derecha: 'flecha_abajo_derecha'
};
Object.freeze(Direction)

// div_flecha_arriba_derecha = document.getElementById("flecha_centro_derecha");
// div_flecha_arriba_izquierda = document.getElementById("flecha_centro_izquierda");
// div_flecha_central = document.getElementById("flecha_central");
// div_flecha_abajo = document.getElementById("flecha_abajo");
// div_flecha_arriba = document.getElementById("flecha_arriba");
acciones = [//En este arreglo se definen las flechas que serán animadas
	{
		duracion: 1,
		id_flechas: [Direction.flecha_arriba_derecha, Direction.flecha_arriba_izquierda, Direction.flecha_arriba],
		wait_time: 1000
	},
	{
		duracion: 1,
		id_flechas: [Direction.flecha_abajo_derecha, Direction.flecha_abajo_izquierda, Direction.flecha_abajo],
		wait_time: 1000
	},
	{
		duracion: 1,
		id_flechas: [Direction.flecha_centro_derecha, Direction.flecha_centro_izquierda],
		wait_time: 1000
	},
	{
		duracion: 1,
		id_flechas: [Direction.flecha_central]
   	},
	{
		duracion: 1,
		id_flechas: [Direction.flecha_centro_derecha, Direction.flecha_centro_izquierda]
	},
	{
	 	duracion: 1,
	 	id_flechas: [Direction.flecha_central]
	},
	{
		duracion: 1,
		id_flechas: [Direction.flecha_centro_derecha, Direction.flecha_centro_izquierda],
		wait_time: 1000
	},
	{
		duracion: 1,
		id_flechas: [Direction.flecha_central]
   	},
	{
		duracion: 1,
		id_flechas: [Direction.flecha_centro_derecha, Direction.flecha_centro_izquierda]
	},
	{
	 	duracion: 1,
	 	id_flechas: [Direction.flecha_central]
	}
]

// console.log("Esto es una prueba");
function update () {
	console.log("wwiiiiiiiiiii");
	const gamepads = navigator.getGamepads ();
	if(gamepads[0]){
		// console.log(gamepads [0] .buttons [2] .pressed);
		if(gamepads [0] .axes [9] .toFixed(3) !== -1.000){//si no está presionado el botón, activa la animación de botón incorrecto
			flecha_arriba.classList.toggle('boton_incorrecto')
			console.log("fdup");
			// setTimeout(() => {flecha_arriba.classList.remove('boton_incorrecto')}, 1000)
			// return;
		}
	}
// //    setTimeout(() => rAF(update), 1000)
setTimeout(() => rAF(update), 1000)//Aqui está volviendo a llamar a la función para que sea ciclico su funcionamiento
  }
function stopFetching() {
	cancelAnimationFrame(rAF);
}
  update();
let wait_time = 0;
for (let i = 0; i < acciones.length; i++) {//Mientras tenga objetos el arreglo, esta función se realizará
	// upadete();
	const accion = acciones[i];
	// console.log(accion.id_flechas)
	if (accion.id_flechas) {
		setTimeout(function() {	//Pone un tiempo a la función para que se pueda ver la función
				console.log("corre", accion)
				accion.id_flechas.forEach(id_flecha => {
					//Dependiedndo de el id en el arreglo, el switch activará el boton que esté en el objeto
					switch(id_flecha) {
						case Direction.flecha_arriba_izquierda:
							flecha_arriba_izquierda.classList.toggle('boton_activo')
							flecha_arriba_izquierda.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_arriba:
							flecha_arriba.classList.toggle('boton_activo')
							flecha_arriba.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_arriba_derecha:
							flecha_arriba_derecha.classList.toggle('boton_activo');
							flecha_arriba_derecha.style['animation-iteration-count'] = accion.duracion*2;			
						break
						case Direction.flecha_centro_izquierda:
							flecha_centro_izquierda.classList.toggle('boton_activo')
							flecha_centro_izquierda.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_central:
							flecha_central.classList.toggle('boton_activo')
							flecha_central.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_centro_derecha:
							flecha_centro_derecha.classList.toggle('boton_activo');
							flecha_centro_derecha.style['animation-iteration-count'] = accion.duracion*2;			
						break
						case Direction.flecha_arriba_izquierda:
							flecha_arriba_izquierda.classList.toggle('boton_activo')
							flecha_arriba_izquierda.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_abajo_izquierda:
							flecha_abajo_izquierda.classList.toggle('boton_activo')
							flecha_abajo_izquierda.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_abajo:
							flecha_abajo.classList.toggle('boton_activo')
							flecha_abajo.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_abajo_derecha:
							flecha_abajo_derecha.classList.toggle('boton_activo')
							flecha_abajo_derecha.style['animation-iteration-count'] = accion.duracion*2;
						break
					}
				})
			
			console.log("adentro", wait_time)
		}, wait_time)//Hace la acción después del wait time
		wait_time = wait_time + accion.duracion * 1000;
		console.log("afuera", wait_time)
	}
	if (accion.id_flechas){
		setTimeout(function() {
			accion.id_flechas.forEach(id_flecha => {
				//Quita la clase de boton activo después de la animación
				switch(id_flecha) {
					case Direction.flecha_arriba_izquierda:
						flecha_arriba_izquierda.classList.remove('boton_activo')
					break
					case Direction.flecha_arriba:
						flecha_arriba.classList.remove('boton_activo')
					break
					case Direction.flecha_arriba_derecha:
						flecha_arriba_derecha.classList.remove('boton_activo')
					break
					case Direction.flecha_centro_izquierda:
							flecha_centro_izquierda.classList.remove('boton_activo');
					break
					case Direction.flecha_central:
							flecha_central.classList.remove('boton_activo');
					break
					case Direction.flecha_centro_derecha:
						flecha_centro_derecha.classList.remove('boton_activo');
					break
					case Direction.flecha_abajo_izquierda:
						flecha_abajo_izquierda.classList.remove('boton_activo')
					break
					case Direction.flecha_abajo:
						flecha_abajo.classList.remove('boton_activo')
					break
					case Direction.flecha_abajo_derecha:
						flecha_abajo_derecha.classList.remove('boton_activo')
					break
				}
			})
	}, wait_time)
	}
// 	stopFetching();
}