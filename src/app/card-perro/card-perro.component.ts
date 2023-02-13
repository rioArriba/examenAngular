import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Perro } from '../Modelos/perro';

@Component({
  selector: 'app-card-perro',
  templateUrl: './card-perro.component.html',
  styleUrls: ['./card-perro.component.css']
})
export class CardPerroComponent {
 @Input() perro!:Perro
@Output() modificarPerro = new EventEmitter<Perro>

 modificar(nombre:string) {
  this.perro.nombre= nombre
  this.modificarPerro.emit(this.perro)
 }
}
