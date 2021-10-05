import { Component, ModuleWithProviders, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Movie } from '../shared/models/movie';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})

export class ListComponent implements OnInit {
  Movies: Movie[] = [];
  searchQuery = '';
  timer = null;
  noResult = false;
  displayMod: boolean = false;
  apiResponse: any;
  IsAsc: boolean = true;
  editTitle: number = -1;
  sortMoviesTxt: string = 'Sort as DESC';
  displayModTxt: string = 'Display as list ';
  page: number = 1;
  pageSize: number = 4;

  constructor(
    public restApi: RestApiService,
    private messageService: MessageService) {
    this.apiResponse = [];
  }
  ngOnInit() {
    // Get movies list
    this.loadAllMovies();
  }

  displayFunc() {
    this.displayMod = !this.displayMod;
    if (this.displayMod) this.displayModTxt = 'Display as grid ';
    else this.displayModTxt = 'Display as list ';
  }

  clearSerch() {
    this.searchQuery = '';

  }
  searchMovie(searchStr: string) {
    this.Movies = this.Movies;
  }


  loadAllMovies() {
    this.restApi.getAllMovies().subscribe((data) => {
      this.apiResponse = data;
      this.Movies = this.apiResponse.results;
      this.Movies = this.sortMovies();
      this.messageService.sendMovies(this.Movies);
    });
  }

  sortMovies(IsAsc: boolean = true) {
    const SortedM = this.Movies.sort(function (a, b) {
      if (a.Title.toLowerCase() > b.Title.toLowerCase()) {
        if (IsAsc) return 1; else return -1;
      }
      if (a.Title.toLowerCase() < b.Title.toLowerCase()) {
        if (IsAsc) return -1; else return 1;
      }
      return 0;

    });
    this.IsAsc = IsAsc;
    if (IsAsc) this.sortMoviesTxt = 'Sort as DESC';
    else this.sortMoviesTxt = 'Sort as ASC';
    return SortedM

  }

  editfield(i: number) {
    this.editTitle = i;
  }

  updateMovie(movie: Movie) {
    this.restApi.updateMovies(movie);
  }
}

