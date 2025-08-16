import { Component, Input } from '@angular/core';
import { type Movie } from './movie.model';
import { MovieInfoComponent } from './movie-info/movie-info.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MovieInfoComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input({required:true}) movie!: Movie;
  isMovieInfo = false;

  onStartMovie() {    
    this.isMovieInfo = true;
  }

  onCancelMovie() {
    this.isMovieInfo = false; 
  }
}