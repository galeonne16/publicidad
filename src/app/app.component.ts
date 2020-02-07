import { Component, OnInit } from '@angular/core';
import { RotadorService } from './servicios/rotador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'publicidad';

  constructor(
    public rotador: RotadorService
  ) {}

  ngOnInit() {
    this.rotador.rotarPagina(10000);
  }
}
