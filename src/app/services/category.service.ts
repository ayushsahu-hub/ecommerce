import { Injectable } from '@angular/core';
import { Category } from '../shared/category.types';
import { categories } from '../sampleData/categories.data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategories():Category[]{
    return categories;
  }
}
