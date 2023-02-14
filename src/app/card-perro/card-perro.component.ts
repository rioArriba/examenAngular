import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Perro } from '../Modelos/perro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-perro',
  templateUrl: './card-perro.component.html',
  styleUrls: ['./card-perro.component.css']
})
export class CardPerroComponent {
 @Input() perro!:Perro
@Output() modificarPerro = new EventEmitter<Perro>
nombre!:string

 modificar(nombre:string): void {
  this.perro.nombre= nombre
  this.modificarPerro.emit(this.perro)
 }
}
