import { Injectable } from '@angular/core';
import { Item } from './budget/item'
import { ChartData } from './charts/chartData'

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  getBudget(): Item[] {
    if(window.localStorage.getItem("budgetData")) {
      const data: Item[] = JSON.parse(window.localStorage.getItem("budgetData"));
      data.forEach(item => {
        item.date = new Date(item.date);
      });
      return data;
    }
    else return [];
  }

  getBudgetChartData(): ChartData {
    let data = {
      "date" : [],
      "category" : [],
      "subcategory" : [],
      "amount" : [],
    }
    const fromStorage: Item[] = this.getBudget();
    fromStorage.forEach(item => {
      data.date.push(item.date.toLocaleDateString('en-US'));
      data.category.push(item.category === "" ? "uncategorized" : item.category);
      data.subcategory.push(item.subcategory === "" ? "uncategorized" : item.subcategory);
      data.amount.push(item.amount);
    });
    
    return data;
  }

  saveBudget(budget: Item[]): void {
    console.log(budget[0].date.valueOf())
    budget = budget.sort((a,b)=>a.date.valueOf()-b.date.valueOf())
    window.localStorage.setItem("budgetData",JSON.stringify(budget))
  }
}
