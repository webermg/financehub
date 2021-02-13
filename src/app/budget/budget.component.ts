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
  toAdd = {
    id: Date.now(),
    date: "",
    category: "",
    subcategory: "",
    amount: ""
  }
  categories = categories;
  subcategories = subcategories;
  items: Item[];
  numberValidator = /([0-9]*\.)?[0-9]{0,2}/

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.items = this.budgetService.getBudget();
  }

  add(item: Item): boolean {
    
    if(!this.validateAmount(this.toAdd.amount)) return false;
    this.items.push({...item});
    this.reset();
    this.save();
    return true;
  }

  update(index: number): void {
    if(this.selected < 0) {
      this.selected = index;
    }
    else this.selected = -1;
  }

  delete(id: number): void {
    this.items = this.items.filter(item=>item.id!==id);
    this.save();
  }

  reset(): void {
    this.toAdd.id=Date.now();
    this.toAdd.date = "";
    this.toAdd.category = "";
    this.toAdd.subcategory = "";
    this.toAdd.amount = "";
  }

  save(): void {
    this.budgetService.saveBudget(this.items)
  }

  validateAmount(amount: string): boolean {
    return this.numberValidator.test(amount) && parseInt(amount) >= 0;
  }

}
