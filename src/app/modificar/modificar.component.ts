import { Component } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
laLola:number = 0
  cambio() {
    if(this.laLola < 2) {
      this.laLola += 1
    } else {
      this.laLola = 0
    }
  }
}
