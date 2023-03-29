import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent {
  alumnos: string[] = [
    'Aimar Nadal',
    'Basilio Manzano',
    'Nagore Alcalde',
    'Sheila Carrero',
    'Josep de Haro',
    'Nagore Alcalde',
    'Rosana Carreño',
    'Felipa Espino',
    'Jose-Maria Cervera',
    'Nagore Alcalde',
    'Arancha Castells',
    'Carlota Gimenez',
    'Nagore Alcalde',
  ]

  getFontsize(arg: number): string {
    switch (arg) {
      case 1:
        return '30px';
        case 2:
          return '50px';
          default:
            return '10px';
    }
  }
}
