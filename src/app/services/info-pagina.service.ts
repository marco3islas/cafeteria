import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {InfoPagina} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

    info: InfoPagina = {};
    cargada = false;

    alimentos: any [] = [];
    bebidas: any [] = [];

  constructor( private http: HttpClient ){ 
      this.cargarInfo();
      this.cargarAlimentos();
      this.cargarBebidas();

  }


    private cargarInfo(){
      console.log( 'Servicio de pagina listo');
      // Leer el archivo JSON
      //
      this.http.get('assets/data/data-pagina.json')
          .subscribe( (resp: InfoPagina) => {

              this.cargada = true;
              this.info = resp;
          });
    }

    private cargarAlimentos(){
      // Leer el archivo JSON
      //
      this.http.get('https://app-cafe-milugar-default-rtdb.firebaseio.com/alimentos.json')
          .subscribe( (resp: any ) => {

              this.alimentos = resp;
              console.log(resp);
          });
        
    }

    private cargarBebidas(){
        // Leer el archivo Json de Firebase
        this.http.get('https://app-cafe-milugar-default-rtdb.firebaseio.com/bebidas.json')
            .subscribe(( resp: any) => {
                this.bebidas = resp;
                console.log(resp);
            })

    }
}
