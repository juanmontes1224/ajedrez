import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { TableroComponent } from '../app/tablero/tablero.component';


const routes: Routes = [
  {path: 'DashboardComponent',component: DashboardComponent},
  {path: 'Tablero',component: TableroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}