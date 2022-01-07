import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];

  heroeBorrado: string = '';

  borrarHeroe(): void {

    console.log('Borrando heroe...');

    this.heroeBorrado =  this.heroes.shift() || ''

    //console.log('Borrando heroe...',  this.heroeBorrado);

    //this.heroes.pop();

  }

}
