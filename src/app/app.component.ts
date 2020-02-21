import { Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Northern Virginia Mela';

  constructor(private titleService: Title, private meta: Meta) {
    titleService.setTitle(this.title);

    meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'}, true);
    meta.addTag({name: 'description', content: 'Movies, Events, Sports and fun.... '}, true);
    meta.addTag({name: 'author', content: 'Naveen Gutta'}, true);
    meta.addTag({name: 'generator', content: 'Jekyll v3.8.6'}, true);
    meta.addTag({name: 'theme-color', content: '#563d7c'}, true);
    meta.addTag({name: 'msapplication-config', content: '/docs/4.4/assets/img/favicons/browserconfig.xml'}, true);
  }
}
