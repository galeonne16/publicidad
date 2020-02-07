import { Component, OnInit } from '@angular/core';
import { RotadorService } from '../../servicios/rotador.service';

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.scss']
})
export class CamarasComponent implements OnInit {

  constructor(
    public rotador: RotadorService
  ) { }

  ngOnInit() {
    // this.rotador.rotarPagina();
  }

}
