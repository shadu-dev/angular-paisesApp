import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {
  pais!:Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService 
    ){}

  ngOnInit():void {
    this.activatedRoute.params
    .pipe(
      switchMap(( param ) => {
        // No pude acceder por notacion de punto asi que ingrese por corchetes al id
        return this.paisService.getPaisPorAlpha(param['id'])}),
      // tap(resp => console.log(resp))
    )
    .subscribe(pais => {
      this.pais = pais[0]
    });

    // Otra forma de realizarlo
    // this.activatedRoute.params
    //   .subscribe(({id}) => {
    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe(pais => {
    //         console.log(pais);
    //       })
    //   });
  }
}
