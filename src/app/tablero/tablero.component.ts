import { Component, OnInit } from '@angular/core';
import { Jugador } from '../Jugador';
import {Pieza} from '../pieza'
  import { from } from 'rxjs';
  import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  PeonBlanco: Pieza ={
    id:1,
    ruta: "assets/Piezas/PeonBlanco.png"
  };

  jugador1 : Jugador = {
    id : 1,
    nombre : "Roa"
  };
  jugador2 : Jugador = {
    id : 2,
    nombre : "Cheetos"
  };


  filas = [];
  id1='';
  id2='';
  constructor(private router: Router,private route: ActivatedRoute) { 
    


    for(var i=0; i<8; i++){
      this.filas[i] = [];
      for(var j=0; j<8; j++){
        //this.filas[1][1]='pieza';
        if((i + j) % 2 == 0){
          this.filas[i][j]= 'posicion2';
        }else{
          this.filas[i][j]= 'posicion1';
        }
      }
    }
  }
  

  ngOnInit() {
     this.id1=this.route.snapshot.paramMap.get('id1')
     this.id2=this.route.snapshot.paramMap.get('id2')
     

  }

}

