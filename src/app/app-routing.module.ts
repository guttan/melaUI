import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './Sections/news/news.component';
import { MoviesComponent } from './Sections/movies/movies.component';

const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'movies', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
