import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamarasComponent } from './pages/camaras/camaras.component';
import { PublicidadComponent } from './pages/publicidad/publicidad.component';
import { YouknowComponent } from './pages/youknow/youknow.component';


const routes: Routes = [
  { path: 'camaras', component: CamarasComponent },
  { path: 'publicidad', component: PublicidadComponent },
  { path: 'youknow', component: YouknowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
