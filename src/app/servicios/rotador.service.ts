import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RotadorService {

  constructor(
    public router: Router
  ) { }

  rotarPagina( milisegundos ) {
    setInterval(() => {
      if ( this.router.url === '/camaras') {
        this.router.navigate(['/publicidad']);
      }

      if ( this.router.url === '/publicidad') {
        this.router.navigate(['/youknow']);
      }

      if ( this.router.url === '/youknow') {
        this.router.navigate(['/camaras']);
      }
    }, milisegundos);
  }
}
