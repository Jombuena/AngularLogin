import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `  

      <div class="backgroundImage" [ngStyle]="{ 'background-image': 'url(' + imageUrl2 + ')'}">
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
      </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  
  imageUrl = 'http://www.thephoblographer.com/wp-content/uploads/2013/01/P1050220_lr-2000.jpg';
  imageUrl2 = 'https://cdn-images-1.medium.com/max/1920/1*zIL2WzmuI3xlbr0bcIUptw.jpeg';
  
}
