import { Injectable, OnDestroy } from '@angular/core';
import { Movie } from './models/movie';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  movies: Movie[] = [];
  MoviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(this.movies);

  constructor() { }

  sendMovies(movies: Movie[]) {
    S
    this.MoviesSubject.next(movies);
    this.movies = movies;

  }

  receiveMovie() {
    this.MoviesSubject.next(this.movies);
  }

}
