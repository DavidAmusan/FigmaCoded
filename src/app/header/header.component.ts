import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(1000, style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('800ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('800ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  spin=false
  spin1=false;
  spin2=false;
  spin3=false;
  show:boolean=false;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
github=faGithub
instagram=faInstagram
linkedin=faLinkedin
envelope=faEnvelope
constructor(config: NgbCarouselConfig) {
  // customize default values of carousels used by this component tree
  config.showNavigationArrows = true;
  config.showNavigationIndicators = true;
}
  ngOnInit(): void {

  }
  showNavigationArrows = false;
  showNavigationIndicators = false;

  showit(){
    this.show=true
  }
  
}
