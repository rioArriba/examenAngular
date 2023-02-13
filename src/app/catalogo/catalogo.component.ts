import { Component } from '@angular/core';
import { Perro } from '../Modelos/perro';
import { ServicioService } from '../Servicios/servicio.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  perros!:Array<Perro>
  constructor(private service:ServicioService) {}

  ngOnInit() {
    this.perros = this.service.get()
  }

  modificar(perro:Perro) {
    this.service.modificar(perro)
  }
}
