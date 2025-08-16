import { Component, Output, EventEmitter, Input } from '@angular/core';
import { type Movie } from '../movie.model';
import { SafeUrlPipe } from '../../../shared/safe-url.pipe';
@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [SafeUrlPipe],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.css'
})
export class MovieInfoComponent {
@Input() movie!: Movie;
@Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }
}
