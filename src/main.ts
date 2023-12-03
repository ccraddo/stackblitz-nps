import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NationalParkService } from './national-park.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NParksService } from './services/nParks.service';
import { StateSelectComponent } from './state-select/state-select.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ImageRendererComponent } from './image-render/imag-renderer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { EllipsisTextComponent } from './elipsis-text/elipsis-text.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [NParksService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StateSelectComponent,
    ScrollingModule,
    ImageRendererComponent,
    SpinnerComponent,
    EllipsisTextComponent,
    ImageCarouselComponent,
  ],
  template: `
  <div class="app-heading">National Parks
  <img src="./assets/nps.png" [width]="100" [height]="150">
</div>
  <select-state (selectedStateChange)="filterByState($event)"></select-state>
  <div *ngFor="let park of parks" class="card">
    <h3>{{ park.name }}</h3>
    <p><strong>Location:</strong> {{ park.states.replace(",", ", ") }}</p>
    <p>{{ park.description }}</p>
    <app-image-carousel [park]="park"></app-image-carousel>
    </div>
  `,
})
export class App {
  name = 'Angular';
  // nationalParks!: import("./models/national-park-model").NationalPark[];
  parks: any[] = [];
  stateFilter = '';
  // smallestImageDimensions;

  constructor(private nParksService: NParksService) {
    //this.getNationalParks();
    // this.getNParks();
    // this.smallestImageDimensions = this.calculateSmallestImageDimensions();
  }

  ngOnInit(): void {
    // this.nParksService.getParks(500).subscribe((data) => {
    //   this.parks = data.data;
    // });
  }
  getNParks() {
    this.nParksService.getParks(500).subscribe({
      next: (data) => {
        this.parks = data.data;
      },
      error: (error) => {
        console.error('Error fetching national parks:', error);
      },
    });
  }

  filterByState(e: string) {
    if (e) {
      this.nParksService.getParksByState(e).subscribe({
        next: (data) => {
          this.parks = data.data;
        },
        error: (error) => {
          console.error('Error fetching national parks by state:', error);
        },
      });
    } else {
      this.getNParks();
    }
  }

  calculateSmallestImageDimensions(park: any): {
    width: number;
    height: number;
  } {
    let minWidth = Infinity;
    let minHeight = Infinity;

    park.images.forEach((img: { url: string }) => {
      if (img.url) {
        const tempImage = new Image();
        tempImage.src = img.url;

        minWidth = Math.min(minWidth, tempImage.width);
        minHeight = Math.min(minHeight, tempImage.height);
      }
    });
    return { width: minWidth, height: minHeight };
  }
}

bootstrapApplication(App);
