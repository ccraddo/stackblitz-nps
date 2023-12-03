import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { US_STATES } from './data-arrays';

@Component({
  standalone: true,
  selector: 'select-state',
  imports: [FormsModule, CommonModule],
  template: `
  <label class="state" labelFor="state">State: </label>
    <select class="clickable" id = "state" [(ngModel)]="selectedState" (ngModelChange)="onSelect($event)">
      <option *ngFor="let entry of states" [value]="entry[0]">{{entry[1]}}</option>
    </select>
  `,
  styles : ['.state { font-weight: 600}']
})
export class StateSelectComponent implements OnInit, AfterViewInit {
  states!: any[];
  selectedState!: string;
  @Output() selectedStateChange = new EventEmitter<string>();

  constructor() {}
ngAfterViewInit(): void {
  this.selectedStateChange.emit(this.selectedState);

}

  // Define the function to handle the selection change event
  onSelect(state: string) {
    this.selectedState = state;
    this.selectedStateChange.emit(this.selectedState);
  }

  // Define the initialization logic
  ngOnInit() {
    // Set the default selected state to the first entry of the map
    this.states = US_STATES;
    this.selectedState = this.states[0][0];
  }
}
// export const UsState = {
//   name : 'string',
//   abbr : 'string'

// }
