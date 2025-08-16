import { Component, Input } from '@angular/core';
import { MovieComponent } from "./movie/movie.component";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  @Input({required : true}) id!: string;
  @Input({required : true}) name!: string;


  movies = [
  {
    "id": "m1",
    "categoryId": "u1",
    "title": "Mad Max: Fury Road",
    "summary": "In a post-apocalyptic wasteland, Max teams up with a rebel warrior to escape a tyrannical warlord.",
    "releaseDate": "2015-05-15"
  },
  {
    "id": "m2",
    "categoryId": "u1",
    "title": "John Wick",
    "summary": "A retired hitman seeks vengeance for the death of his dog, a final gift from his late wife.",
    "releaseDate": "2014-10-24"
  },
  {
    "id": "m3",
    "categoryId": "u1",
    "title": "Die Hard",
    "summary": "A New York cop battles terrorists who have taken hostages in a Los Angeles skyscraper.",
    "releaseDate": "1988-07-15"
  },
  {
    "id": "m4",
    "categoryId": "u2",
    "title": "The Hangover",
    "summary": "A bachelor party in Las Vegas turns into a wild adventure as three friends try to piece together what happened the night before.",
    "releaseDate": "2009-06-05"
  },
  {
    "id": "m5",
    "categoryId": "u2",
    "title": "Superbad",
    "summary": "Two high school friends try to make the most of their final days before graduation, facing awkward and hilarious situations.",
    "releaseDate": "2007-08-17"
  },
  {
    "id": "m6",
    "categoryId": "u2",
    "title": "21 Jump Street",
    "summary": "Two undercover cops are assigned to infiltrate a high school and stop a drug ring.",
    "releaseDate": "2012-03-16"
  },
  {
    "id": "m7",
    "categoryId": "u3",
    "title": "The Conjuring",
    "summary": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    "releaseDate": "2013-07-19"
  },
  {
    "id": "m8",
    "categoryId": "u3",
    "title": "Hereditary",
    "summary": "A family is haunted after the death of their secretive grandmother, unraveling dark and disturbing family secrets.",
    "releaseDate": "2018-06-08"
  },
  {
    "id": "m9",
    "categoryId": "u3",
    "title": "A Quiet Place",
    "summary": "In a post-apocalyptic world, a family must live in silence to avoid blind monsters that hunt by sound.",
    "releaseDate": "2018-04-06"
  },
  {
    "id": "m10",
    "categoryId": "u4",
    "title": "Indiana Jones: Raiders of the Lost Ark",
    "summary": "Archaeologist Indiana Jones races against Nazis to find the lost Ark of the Covenant before it falls into enemy hands.",
    "releaseDate": "1981-06-12"
  },
  {
    "id": "m11",
    "categoryId": "u4",
    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "summary": "Captain Jack Sparrow and a group of pirates search for treasure while battling cursed spirits on the high seas.",
    "releaseDate": "2003-07-09",
    "trailerUrl": "https://www.youtube.com/watch?v=hEJnMQG9ev8https://www.youtube.com/embed/naQr0uTrH_s?si=mA13OGi8lCi5WJfu"
  },
  {
    "id": "m12",
    "categoryId": "u4",
    "title": "Jumanji: Welcome to the Jungle",
    "summary": "Four teenagers are sucked into a video game, where they must work together to escape.",
    "releaseDate": "2017-12-20"
  },
  {
    "id": "m13",
    "categoryId": "u5",
    "title": "The Shawshank Redemption",
    "summary": "A banker sentenced to life in Shawshank prison befriends a fellow inmate and uncovers the prison's darkest secrets.",
    "releaseDate": "1994-09-23"
  },
  {
    "id": "m14",
    "categoryId": "u5",
    "title": "Forrest Gump",
    "summary": "The remarkable life story of Forrest Gump, an ordinary man who unwittingly influences major historical events.",
    "releaseDate": "1994-07-06"
  },
  {
    "id": "m15",
    "categoryId": "u5",
    "title": "Good Will Hunting",
    "summary": "A janitor at MIT, with a genius-level IQ, struggles to find his way in life until he begins therapy.",
    "releaseDate": "1997-12-05"
  },
  {
    "id": "m16",
    "categoryId": "u6",
    "title": "Interstellar",
    "summary": "A group of astronauts journey through a wormhole to find a new home for humanity as Earth faces extinction.",
    "releaseDate": "2014-11-07"
  },
  {
    "id": "m17",
    "categoryId": "u6",
    "title": "The Matrix",
    "summary": "A computer hacker discovers that reality as he knows it is a simulated world created by sentient machines.",
    "releaseDate": "1999-03-31"
  },
  {
    "id": "m18",
    "categoryId": "u6",
    "title": "Inception",
    "summary": "A thief who enters the minds of others through their dreams is given a chance to have his criminal record erased.",
    "releaseDate": "2010-07-16"
  }
];

get selectedCategoryMovies() {
  return this.movies.filter(movie => movie.categoryId === this.id);
}
}
