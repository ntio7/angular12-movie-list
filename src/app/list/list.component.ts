import { Component, ModuleWithProviders, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Movie } from '../shared/models/movie';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})

export class ListComponent implements OnInit, OnDestroy {
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
  subscribe: any;


  constructor(
    private ref: ChangeDetectorRef,
    public restApi: RestApiService,
    private messageService: MessageService) {
    this.apiResponse = [];
  }
  ngOnInit() {
    // Get movies list
    this.loadAllMovies();
    this.subscribe = this.messageService.pageSubject.subscribe(data => {
      this.page = data;
    });
    this.ref.detach();
    setTimeout(() => { this.ref.reattach();}, 50);
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

  Currentpage() {
    this.messageService.sendPage(this.page);
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}

