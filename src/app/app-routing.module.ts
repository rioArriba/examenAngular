import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AguardaGuard } from './Guards/aguarda.guard';
import { ModificarComponent } from './modificar/modificar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { PadreDelDelTutuComponent } from './padre-del-del-tutu/padre-del-del-tutu.component';

const routes: Routes = [
  {path:"catalogo", component: CatalogoComponent},
  {path:"tutu", canActivate:[AguardaGuard], component: ModificarComponent},
  {path:"padre/:id", component: PadreDelDelTutuComponent},
  {path:"nuevo", component: NuevoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
