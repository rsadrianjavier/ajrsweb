import {Component} from '@angular/core';
import {Section} from './section';

@Component({
	selector: 'ajrsnavsection',
	templateUrl: './navsection.component.html'
})

export class NavSectionComponent{
	public titulo = 'Componente navsection';
	public section: Section;

	ngOnInit(){
		this.section = new Section('seccion 1');
		console.log(this.section)
	}

}