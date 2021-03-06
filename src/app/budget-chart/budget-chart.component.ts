import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service'
import { Item } from '../budget/item'
import { TimeSeriesChartComponent } from '../charts/time-series-chart/time-series-chart.component'

@Component({
  selector: 'app-budget-chart',
  templateUrl: './budget-chart.component.html',
  styleUrls: ['./budget-chart.component.css']
})
export class BudgetChartComponent implements OnInit {

  items: Item[];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.items = this.budgetService.getBudget();
  }

}
