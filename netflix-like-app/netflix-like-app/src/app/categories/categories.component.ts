import { Component,EventEmitter, Input, Output } from '@angular/core';
import { type Category } from './categories.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Input({required: true}) category!: Category;
  @Input({required: true}) selected! : boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/categories/'+this.category.avatar;
  }

  onSelectCategory() {
    this.select.emit(this.category.id)
  }
}
