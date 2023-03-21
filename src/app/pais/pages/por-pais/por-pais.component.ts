import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino:string = '';
  hayError:boolean = false;
  paises:Country[] = [];
  paisesSugeridos:Country[] = [];
  mostrarSugerencia = false;

  constructor( private paisService: PaisService){}

  buscar(termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = false;    
    this.paisService.buscarPais(this.termino).subscribe((paises) => {
      this.paises = paises;
    }, (err) => {
        this.hayError = true;
        this.paises = [];
    });
  }

  sugerencias(termino:string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.sugerencias
    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 5),
        error => this.paisesSugeridos = []
        );
  }

}
