import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/models/movie';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit, OnDestroy {

  movie: Movie = new Movie();
  title: string = '';
  movieId = this.router.snapshot.params['movie-id'];
  subscribe: any;

  constructor(
    private router: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void { 
    this.subscribe =  this.messageService.MoviesSubject.subscribe(data => {
      this.movie = data[this.movieId];
    });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
  
}
