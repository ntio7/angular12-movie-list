import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Movie } from './models/movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService implements OnInit, OnDestroy {

  subject: Subject<Movie[]> = new Subject<Movie[]>()

  movie: Movie = new Movie();
  movies: Movie[] = [];

  constructor() { }

  ngOnInit() {
  
  }

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
