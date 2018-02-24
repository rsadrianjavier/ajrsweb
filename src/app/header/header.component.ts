import { Component } from '@angular/core';

@Component({
	selector: 'ajrsheader',
	templateUrl: './header.component.html'
})

export class HeaderComponent{
	public nombre_componente: string;
	public email: string;
	public nombre_guiones: string;

	constructor(){
		this.nombre_componente = 'Componente header del sitio ajrsweb';
		this.email = 'rodriguezsanchezadrianjavier@gmail.com';
		this.nombre_guiones = 'rodriguez-sanchez-adrian-javier';
		

	}

	ngOnInit(){
		this.cambiarNombre();
		//alert('Bienvenido a ' + this.nombre_guiones);

		// Variables y alcance
		let uno = 8;
		var dos = 15;

		if(uno === 8){
			uno = 3;
			dos = 88;

			console.log("Dentro del if: " + uno + dos);
		}

		console.log("Fuera del if: " + uno + dos);
	}
	

	cambiarNombre(){
		this.nombre_guiones = this.nombre_guiones + ' web';
	}	
}