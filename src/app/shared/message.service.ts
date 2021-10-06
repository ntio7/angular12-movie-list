import { Injectable, OnDestroy } from '@angular/core';
import { Movie } from './models/movie';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  MoviesSubject: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  pageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
 

  constructor() { }

  sendMovies(movies: Movie[]) { 
    this.MoviesSubject.next(movies);
  }

  sendPage(page: number){
    this.pageSubject.next(page);
  }

}
