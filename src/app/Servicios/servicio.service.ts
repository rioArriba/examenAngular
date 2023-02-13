import { Injectable } from '@angular/core';
import { Perro } from '../Modelos/perro';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  private perros=[
    {
      "id": 1,
      "nombre": "Pastor Australiano",
      "foto": "1.jpg"
    },
    {
      "id": 2,
      "nombre": "Border Collie",
      "foto": "2.jpg.webp"
    },
  ]

  get() {
    return this.perros;
  }
  
  modificar(perro:Perro) {
    let indice = this.perros.findIndex(item => item.id == perro.id)
    this.perros.splice(indice, 1, perro)
  }
}
