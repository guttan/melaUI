import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { NewsComponent } from './Sections/news/news.component';
import { MoviesComponent } from './Sections/movies/movies.component';
import { OpinionComponent } from './Sections/opinion/opinion.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EventsComponent } from './Sections/events/events.component';
import { SportsComponent } from './Sections/sports/sports.component';
import { TravelComponent } from './Sections/travel/travel.component';
import { ConcertsComponent } from './Sections/concerts/concerts.component';
import { AccomodationComponent } from './Sections/accomodation/accomodation.component';
import { KidsComponent } from './Sections/kids/kids.component';
import { HealthComponent } from './Sections/health/health.component';
import { ServicesComponent } from './Sections/services/services.component';
import { JobsComponent } from './Sections/jobs/jobs.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TopNavbarComponent,
    NewsComponent,
    MoviesComponent,
    OpinionComponent,
    EventsComponent,
    SportsComponent,
    TravelComponent,
    ConcertsComponent,
    AccomodationComponent,
    KidsComponent,
    HealthComponent,
    ServicesComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
