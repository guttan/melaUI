import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accomodation } from 'src/app/Shared/models/accomodation.model';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class AccomodationComponent implements OnInit {

  accomodation: Accomodation;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.accomodation = new Accomodation({});
  }

  requestAccomodation() {
    console.log('....Request Accomodatoin..');

    this.httpClient.post('https://novameladb.firebaseio.com/accomodation.json', this.accomodation)
      .subscribe(resp => {
        console.log('....Request Accomodatoin..', resp);
      });
  }

}
