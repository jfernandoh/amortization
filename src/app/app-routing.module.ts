import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './containers/board/board.component';
import { SimulatorComponent } from './containers/simulator/simulator.component';

const routes: Routes = [
  { path: 'simulador', component: SimulatorComponent },
  { path: 'amortizacion/:amount/:time/:rate', component: BoardComponent },
  {
    path: '**',
    component: SimulatorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
