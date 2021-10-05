import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Movie } from '../shared/models/movie';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  movie: Movie = new Movie();
  title: string = '';
  movieId = this.router.snapshot.params['movie-id'];

  constructor(    
    private router: ActivatedRoute,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
   
    this.movie = this.messageService.receiveMovie(this.movieId);
  }
}
