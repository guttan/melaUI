import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsArticles } from '../models/news-articles.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  getNewsHeadlines(): Observable<NewsArticles> {

    const url = `${environment.newsHeadlines}`;

    return this.httpClient.get<NewsArticles>(url)
      .pipe(
        map(newsJson => {
          newsJson = new NewsArticles(newsJson);
          newsJson.articles.map(articlesJson => {
            articlesJson = new News(articlesJson);
            return articlesJson;
          })
          return newsJson;
        })
      );
  }

}
