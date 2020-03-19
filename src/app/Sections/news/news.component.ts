import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Shared/services/news.service';
import { News } from 'src/app/Shared/models/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNewsHeadlines()
      .subscribe(resp => {
        this.news = resp.articles;
      });
  }


}
