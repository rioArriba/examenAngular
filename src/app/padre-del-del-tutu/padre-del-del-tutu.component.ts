import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-padre-del-del-tutu',
  templateUrl: './padre-del-del-tutu.component.html',
  styleUrls: ['./padre-del-del-tutu.component.css']
})
export class PadreDelDelTutuComponent {
  id!:number
  constructor(private miRuta:ActivatedRoute, private ruta: Router){}

  ngOnInit(){
    this.id = this.miRuta.snapshot.params["id"]
  }

  andate() {
    this.ruta.navigate(["/nuevo"])
  }
}
