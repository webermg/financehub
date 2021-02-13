import { Component, OnInit } from '@angular/core';
import { Item } from './item'
import { categories } from './categories'
import { subcategories } from './subcategories'
import {BudgetService} from '../budget.service'

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  
  selected=-1;
  date: string;
  category: string;
  subcategory: string;
  amount: string;
  categories = categories;
  subcategories = subcategories;
  items: Item[];
  numberValidator = /([0-9]*\.)?[0-9]{0,2}/

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.refresh();
  }

  add(): boolean {
    
    if(!this.validateAmount(this.amount)) return false;
    const toAdd: Item = {
      id: Date.now(),
      date: this.date,
      category: this.category,
      subcategory: this.subcategory,
      amount: parseFloat(this.amount)
    };
    this.items.push(toAdd);
    this.reset();
    this.save();
    return true;
  }

  update(index: number): void {
    if(this.selected < 0) {
      this.selected = index;
    }
    else {
      if(this.selected === index) this.save();
      else this.refresh();
      this.selected = -1;
    }
  }

  delete(id: number): void {
    this.items = this.items.filter(item=>item.id!==id);
    this.save();
  }

  reset(): void {
    this.date = "";
    this.category = "";
    this.subcategory = "";
    this.amount = "";
  }

  save(): void {
    this.budgetService.saveBudget(this.items)
  }

  refresh(): void {
    this.items = this.budgetService.getBudget();
  }

  validateAmount(amount: string): boolean {
    return this.numberValidator.test(amount) && parseFloat(amount) >= 0;
  }

}
