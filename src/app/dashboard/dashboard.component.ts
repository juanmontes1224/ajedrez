import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TableroComponent } from '../tablero/tablero.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  valor1='1'
  valor2='2'

  constructor(private router:Router,private route: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    

  }
  
  IrATablero(id1:String,id2:String){
    this.router.navigate(['/Tablero',id1,id2]);
  }
  
}
