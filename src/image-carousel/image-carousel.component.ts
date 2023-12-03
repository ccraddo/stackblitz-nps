// image-carousel.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EllipsisTextComponent } from '../elipsis-text/elipsis-text.component';
import { ImageRendererComponent } from '../image-render/imag-renderer.component';

@Component({
  standalone: true,
  imports : [EllipsisTextComponent, ImageRendererComponent, CommonModule],
  selector: 'app-image-carousel',
  template: `
    <div *ngIf="park.images && park.images.length > 0">
      <app-ellipsis-text class="caption" [caption]="park.images[currentImageIndex].caption"></app-ellipsis-text>
      <div class="image-container">
        <img *ngIf="park.images[currentImageIndex].url" [src]="park.images[currentImageIndex].url" alt="{{ park.images[currentImageIndex].caption }}">
        <app-image-renderer [imageUrl]="park.images[currentImageIndex].url" [altText]="park.images[currentImageIndex].altText" [credit]="park.images[currentImageIndex].credit"></app-image-renderer>
        <div class="button-overlay">
          <button class="clickable" *ngIf="hasPrevious()" (click)="showPrevious()">< Previous</button>
          <button class="clickable" *ngIf="hasNext()" (click)="showNext()">Next ></button>
        </div>
      </div>
    </div>
  `,
  styles :[`
      button {
      font-size: xx-small;
    }
    .image-container {
      position: relative;
      min-width: 100%;
      /* scroll-snap-align: start; */
      padding: 0 10px; /* Add spacing between images */
      margin-left: -0.5rem;
    }
    .button-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.0); /* Adjust the background color and transparency as needed */
      padding: 10px; /* Adjust the padding as needed */
      display: flex;
      justify-content: space-between;
    }
  `]
})
export class ImageCarouselComponent {
  @Input() park: any; // Replace 'any' with the actual type of your 'park' object

  currentImageIndex: number = 0;

  showPrevious(): void {
    if (this.hasPrevious()) {
      this.currentImageIndex--;
    }
  }

  showNext(): void {
    if (this.hasNext()) {
      this.currentImageIndex++;
    }
  }

  hasPrevious(): boolean {
    return this.currentImageIndex > 0;
  }

  hasNext(): boolean {
    return this.currentImageIndex < this.park.images.length - 1;
  }
}
