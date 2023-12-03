// spinner.component.ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-spinner',
  template: `
    <div class="spinner">
      <!-- Use your preferred spinner implementation here -->
      Loading...
    </div>
  `,
  styles: [
    `
      .spinner {
        /* Add your spinner styles here */
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
    `,
  ],
})
export class SpinnerComponent {}
