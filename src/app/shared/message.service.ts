import { Injectable } from '@angular/core';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 
  constructor() { }
  movie: Movie = new Movie();
  movies: Movie[] = [];

  sendMovies(movies: Movie[]) {
    this.movies = movies;
  }

  receiveMovie(movieId: number): Movie { 
    return  this.movies[movieId];
  }


}
