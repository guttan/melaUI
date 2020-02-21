import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { NewsComponent } from './Sections/news/news.component';
import { MoviesComponent } from './Sections/movies/movies.component';
import { OpinionComponent } from './Sections/opinion/opinion.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TopNavbarComponent,
    NewsComponent,
    MoviesComponent,
    OpinionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
