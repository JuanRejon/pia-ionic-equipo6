import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/interface/pelicula';
@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class PeliculaComponent  implements OnInit {

  @Input() peliculasList:Pelicula[] =[];
  @Output() eliminar: any = new EventEmitter<Pelicula[]>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}
