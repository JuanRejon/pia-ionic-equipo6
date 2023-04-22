import { Injectable } from '@angular/core';
import { Pelicula } from '../interface/pelicula';
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private pelis: Pelicula[] = [];

  constructor() { }

  public agregarPelicula(pelicula: Pelicula){
    if(this.pelis.length>0){
      pelicula.id = this.pelis.length + 1 ;
    } else {
      pelicula.id = 1;
    }
    this.pelis.push(pelicula);
  }

  public borrarPelicula(id: number){
    this.pelis = this.pelis.filter((pe=>pe.id!=id));
  }

  public getPeliculas(): Pelicula[]{
    return this.pelis;
  }

  public setPeliculas(pelis: Pelicula[]){
    this.pelis = pelis;
  }

  public actualiza(pelis: Pelicula): Pelicula[]{
    this.pelis.filter(
      (pe)=>pe.id==pelis.id
    ).map(pe=>{
      pe.nombre=pelis.nombre;
      pe.texto = pelis.texto;
    });
    return this.pelis;
  }
}
