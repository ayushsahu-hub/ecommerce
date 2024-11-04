import { Component } from '@angular/core';
import { Category } from '../shared/category.types';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-sidenavigation',
  standalone: true,
  imports: [],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.scss'
})
export class SidenavigationComponent {
  categories:Category[] = [];

  constructor(private categoryService:CategoryService){
    this.categories = this.categoryService.getAllCategories();
  }

  getCategories(parentCategoryId ?:number){
    return this.categories.filter(category => category.parent_category_id === parentCategoryId);
  }
}
