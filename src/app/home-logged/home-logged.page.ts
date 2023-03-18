import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interface/pelicula';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-home-logged',
  templateUrl: './home-logged.page.html',
  styleUrls: ['./home-logged.page.scss'],
})
export class HomeLoggedPage implements OnInit {

  peliculas:Pelicula[]=[];
  nombre: string = '';
  texto: string = '';
  estado: string = '';
  idActualizar: any|number=0;
  error: boolean = false;

  constructor(private peliService: PeliculaService) { }

  ngOnInit() {
    this.peliService.setPeliculas([
      {id:1, nombre: 'Mi Villano Favorito',
      texto: '10/10 muy divertida'},
      {id:2, nombre: 'Mi Villano Favorito 2',
      texto: '20/10 doble de divertida'},
      {id:1, nombre: 'Boku no Hero Academia',
      texto: 'Besto shonen btw'},
    ]);

    this.peliculas = this.peliService.getPeliculas();
    this.estado = 'Guardar';
  }

  public guardar(){
    if( (this.nombre == undefined || this.nombre == '' ) || 
      (this.texto == undefined || this.texto == '') ) {
      this.error = true;
      return;
    }  
    let pelicula: Pelicula={
      nombre: this.nombre,
      texto: this.texto
    };
    if (this.estado ==='actualizar'){
      pelicula.id = this.idActualizar;
      this.peliculas = this.peliService.actualiza(pelicula);
    }
    if(this.estado === 'guardar'){
      this.peliService.agregarPelicula(pelicula);
      this.peliculas = this.peliService.getPeliculas();
    }
    this.cancelar();
  }

  public cancelar(){
    this.estado = 'guardar';
    this.nombre = '';
    this.texto = '';
    this.error = false;
  }

  public eliminar(id:number){
    this.peliService.borrarPelicula(id);
    this.peliculas = this.peliService.getPeliculas();
  }

  public editar(pelicula:Pelicula){
    this.estado = 'actualizar';
    this.nombre = pelicula.nombre;
    this.texto = pelicula.texto;
    this.idActualizar = pelicula.id;
  }

}
