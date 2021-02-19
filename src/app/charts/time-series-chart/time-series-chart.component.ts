import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BudgetService } from '../../budget.service'
import { ChartData } from '../chartData'

@Component({
  selector: 'app-time-series-chart',
  templateUrl: './time-series-chart.component.html',
  styleUrls: ['./time-series-chart.component.css']
})
export class TimeSeriesChartComponent implements OnInit {

  public data: ChartData;
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  //public lineChartOptions: (ChartOptions & { annotation: any }) = {
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.data = this.budgetService.getBudgetChartData();
    this.lineChartData = [
      {
        data: this.data.amount,
        label: "amount"
      }
    ]
    this.lineChartLabels = this.data.date.map(e=>e.toString());
  }

}
