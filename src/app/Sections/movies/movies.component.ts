import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/Shared/services/movies.service';
import { Movies } from 'src/app/Shared/models/movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  nowPlayingMovies: Movies[];
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    console.log('....MoviesComponent...ngOnInit..');
    this.movieService.getMoviesNowPlaying()
      .subscribe(resp => {
        this.nowPlayingMovies = resp.results;
        console.log('..ngOnInit...resp......', this.nowPlayingMovies);
      });

  }

}
