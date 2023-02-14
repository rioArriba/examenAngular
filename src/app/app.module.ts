import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CardPerroComponent } from './card-perro/card-perro.component';
import { ModificarComponent } from './modificar/modificar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PadreDelDelTutuComponent } from './padre-del-del-tutu/padre-del-del-tutu.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    CatalogoComponent,
    CardPerroComponent,
    ModificarComponent,
    NavbarComponent,
    PadreDelDelTutuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
