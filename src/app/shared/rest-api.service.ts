import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './models/movie';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RestApiService {


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getAllMovies(): Observable<Movie> {
    return this.http.get<Movie>('../../assets/data.json')
      .pipe(
        catchError(this.handleError)
      )
  }

  updateMovies(movies: Movie) {

    // Post to file 
    console.log(movies)

  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
