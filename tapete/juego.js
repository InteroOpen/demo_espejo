
const Direction = {
	flecha_centro_derecha: 'flecha_centro_derecha',
	flecha_centro_izquierda: 'flecha_centro_izquierda',
	flecha_central: 'flecha_central',
	flecha_abajo: 'flecha_abajo',
	flecha_arriba: 'flecha_arriba',
};
Object.freeze(Direction)

// div_flecha_arriba_derecha = document.getElementById("flecha_centro_derecha");
// div_flecha_arriba_izquierda = document.getElementById("flecha_centro_izquierda");
// div_flecha_central = document.getElementById("flecha_central");
// div_flecha_abajo = document.getElementById("flecha_abajo");
// div_flecha_arriba = document.getElementById("flecha_arriba");
console.log(flecha_centro_derecha)
acciones = [
	// {
	// 	duracion: 5,
	// 	id_flechas: null,
	// }, 
	{
		duracion: 2,
		id_flechas: [Direction.flecha_centro_derecha, Direction.flecha_centro_izquierda]
	},
	{
	 	duracion: 2,
	 	id_flechas: [Direction.flecha_central]
	},
	{
		duracion: 2,
		id_flechas: [Direction.flecha_abajo]
   	},
	{
		duracion: 2,
		id_flechas: [Direction.flecha_arriba]
   	},
]

// console.log("Esto es una prueba");

let wait_time = 0;
for (let i = 0; i < acciones.length; i++) {
	const accion = acciones[i];
	console.log(accion.id_flechas)
	if (accion.id_flechas) {
		setTimeout(function() {
				console.log("corre", accion)
				accion.id_flechas.forEach(id_flecha => {
					switch(id_flecha) {
						case Direction.flecha_centro_derecha:
							flecha_centro_derecha.classList.toggle('boton_activo')
							flecha_centro_derecha.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_centro_izquierda:
							flecha_centro_izquierda.classList.toggle('boton_activo')
							flecha_centro_izquierda.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_central:
							flecha_central.classList.toggle('boton_activo')
							flecha_central.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_abajo:
							flecha_abajo.classList.toggle('boton_activo')
							flecha_abajo.style['animation-iteration-count'] = accion.duracion*2;
						break
						case Direction.flecha_arriba:
							flecha_arriba.classList.toggle('boton_activo')
							flecha_arriba.style['animation-iteration-count'] = accion.duracion*2;
						break
					}
				})
			
			console.log("adentro", wait_time)
		}, wait_time)
		wait_time = wait_time + accion.duracion * 1000;
		console.log("afuera", wait_time)
	}
}