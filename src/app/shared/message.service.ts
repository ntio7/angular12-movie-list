import { Injectable, OnDestroy } from '@angular/core';
import { Movie } from './models/movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService implements OnDestroy {

  subject: Subject<Movie[]> = new Subject<Movie[]>();
  movie: Movie = new Movie();
  movies: Movie[] = [];

  constructor() { }

   sendMovies(movies: Movie[]) { 
    this.subject.subscribe(data => {
      this.movies = data;
    });     
    this.subject.next(movies);   
  }

  receiveMovie(movieId: number): Movie {
    return this.movies[movieId];
  }

  receiveMovies(): Movie[] {
    return this.movies;
  }

  ngOnDestroy() {

    this.subject.unsubscribe();
  }


}
