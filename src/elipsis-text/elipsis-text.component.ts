// ellipsis-text.component.ts
import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-ellipsis-text',
  imports: [CommonModule],
  template: `
    <div class="ellipsis-container">
      <p #captionRef class="ellipsis-caption">{{ caption }}</p>
      <button class="clickable" *ngIf="isOverflow" (click)="toggleOverflow()"> <sup> {{overflowText}}</sup></button>
    </div>
  `,
  styles: [
    `
      .ellipsis-container {
        position: relative;
        overflow: hidden;
      }

      .ellipsis-caption {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: '..more..';
        margin: 0;
      }

      button {
        position: absolute;
        bottom: 0;
        right: 0;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        outline: none;
      }

      sup {
        color : bisque
      }

      /* .flash {
        animation: flashAnimation 1.5s ease-out;
      }   

      @keyframes flashAnimation {
        0%, 50%, 100% {
          opacity: 1;
        }
        25%, 75% {
          opacity: 0;
        }
      } */
    `,
  ],
})
export class EllipsisTextComponent implements AfterViewInit {
  @Input() caption: string = '';
  @ViewChild('captionRef') captionRef!: ElementRef;

  isOverflow: boolean = false;
  overflowText = '>>>';
  constructor() {}
  ngAfterViewInit(): void {
    this.checkOverflow();
  }

  private checkOverflow(): void {
    const element = this.captionRef.nativeElement;
    this.isOverflow = element.scrollWidth > element.clientWidth;
  }

  toggleOverflow(): void {
    const element = this.captionRef.nativeElement;

    if (element.style.overflow === 'hidden' || element.style.overflow === '') {
      element.style.overflow = 'visible';
      element.style.whiteSpace = 'normal';
      this.overflowText = '<<<';
    } else {
      element.style.overflow = 'hidden';
      element.style.whiteSpace = 'nowrap';
      this.overflowText = '>>>';
    }
  }
}
