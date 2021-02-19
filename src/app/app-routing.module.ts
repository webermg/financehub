import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { BudgetComponent } from './budget/budget.component'
import { BudgetChartComponent } from './budget-chart/budget-chart.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'budget', component: BudgetComponent},
  {path: 'b_charts', component: BudgetChartComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
