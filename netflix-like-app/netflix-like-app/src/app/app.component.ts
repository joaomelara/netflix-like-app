import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from "./categories/categories.component";
import { DUMMY_CATEGORIES } from './dummy-categories';
import { MoviesComponent } from "./movies/movies.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CategoriesComponent, MoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  categories = DUMMY_CATEGORIES
  selectedCategoryId?: string;

  get selectedCategory() {
    return this.categories.find((category) => category.id === this.selectedCategoryId)!;
  }

  onSelectCategory(id: string) {
    console.log('Selected category with ID:', id);
    this.selectedCategoryId = id;
  }
}
