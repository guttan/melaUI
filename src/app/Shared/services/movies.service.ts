import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Movies } from '../models/movies.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mergeMap, share, switchMap, catchError, map, debounceTime } from 'rxjs/operators';
import { MovieResults } from '../models/movie-results.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMoviesNowPlaying(): Observable<MovieResults> {
    const url = `${environment.moviesPlaying}`;
    return this.http.get<MovieResults>(url)
      .pipe(
        map(movieReults => {
          movieReults = new MovieResults(movieReults);
          movieReults.results.map(movieList => {
            movieList = new Movies(movieList);
            return movieList;
          })
          return movieReults;
        })

      );
  }
}
