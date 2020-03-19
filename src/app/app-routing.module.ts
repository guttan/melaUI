import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './Sections/news/news.component';
import { MoviesComponent } from './Sections/movies/movies.component';
import { EventsComponent } from './Sections/events/events.component';
import { SportsComponent } from './Sections/sports/sports.component';
import { TravelComponent } from './Sections/travel/travel.component';
import { ConcertsComponent } from './Sections/concerts/concerts.component';
import { AccomodationComponent } from './Sections/accomodation/accomodation.component';
import { OpinionComponent } from './Sections/opinion/opinion.component';
import { HealthComponent } from './Sections/health/health.component';
import { ServicesComponent } from './Sections/services/services.component';
import { KidsComponent } from './Sections/kids/kids.component';
import { JobsComponent } from './Sections/jobs/jobs.component';

const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'events', component: EventsComponent},
  {path: 'sports', component: SportsComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'concerts', component: ConcertsComponent},
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'opinion', component: OpinionComponent},
  {path: 'kids', component: KidsComponent},
  {path: 'health', component: HealthComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'jobs', component: JobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
