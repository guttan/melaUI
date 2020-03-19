// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName: '(Local)',
  movieImages: 'https://image.tmdb.org/t/p/w500',
  authService: 'http://localhost:8984/auth/authenticate',
  userDetailsUrl: 'http://localhost:8984/auth/user',
  moviesPlaying: 'https://api.themoviedb.org/3/movie/now_playing?api_key=fd60fd3e370fcd29257ad0c6e3808e4b&language=en-US&page=1',
  newsHeadlines: 'http://newsapi.org/v2/top-headlines?country=us&apiKey=14dce908c8f2446286b6f4f4a01479c2'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
