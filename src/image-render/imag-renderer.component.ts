import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  standalone: true,
  selector: 'app-image-renderer',
  imports: [SpinnerComponent, CommonModule],
  template: `
  <ng-container *ngIf="imageUrl">
    <!-- <ng-container *ngIf="loading; else imageTemplate">
      <app-spinner></app-spinner>
    </ng-container> -->
    <ng-template #imageTemplate>
      <img style="border : solid 2px" [src]="imageUrl" (load)="onImageLoad()" alt="{{ altText }}">
    </ng-template>
    <div class="credit">Credit:{{credit}}</div>
  </ng-container>
  `,
  styles : [`

    .credit {
      font-size: 0.4rem;
      /* //background-color: red; */
      color: green;
    }
  }`]
})
export class ImageRendererComponent {
  @Input() imageUrl: string = '';
  @Input() altText: string = '';
  @Input() credit: string = '';
  loading: boolean = true;

  onImageLoad() {
    console.log(`onImageLoad laoding ${this.loading}`);
    this.loading = false;
  }
}
