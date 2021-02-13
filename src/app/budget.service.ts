import { Injectable } from '@angular/core';
import { Item } from './budget/item'

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  getBudget(): Item[] {
    if(window.localStorage.getItem("budgetData")) return JSON.parse(window.localStorage.getItem("budgetData"));
    else return [];
  }

  saveBudget(budget: Item[]): void {
    window.localStorage.setItem("budgetData",JSON.stringify(budget))
  }
}
