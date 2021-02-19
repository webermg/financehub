import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BudgetComponent } from './budget/budget.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BudgetChartComponent } from './budget-chart/budget-chart.component';
import { TimeSeriesChartComponent } from './charts/time-series-chart/time-series-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    BudgetComponent,
    HomeComponent,
    NavbarComponent,
    BudgetChartComponent,
    TimeSeriesChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
