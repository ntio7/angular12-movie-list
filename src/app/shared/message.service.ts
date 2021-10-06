import { Injectable, OnDestroy } from '@angular/core';
import { Movie } from './models/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  movies: Movie[] = [];
  MoviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(this.movies);

  constructor() { }

  sendMovies(movies: Movie[]) { 

    this.MoviesSubject.next(movies);
  }

}
