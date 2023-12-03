// src/app/national-park.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NationalPark } from './models/national-park-model';

@Injectable({
  providedIn: 'root',
})
export class NationalParkService {
  getNationalParks(): Observable<NationalPark[]> {
    // Replace this with your actual data source (API call, etc.)
    const parks: NationalPark[] = [
      {
        name: 'Yellowstone National Park',
        location: 'Wyoming, Montana, Idaho',
        description: 'The first national park in the world.',
      },
      {
        name: 'Grand Canyon National Park',
        location: 'Arizona',
        description: 'Known for its stunning views and rock formations.',
      },
      // Add more parks as needed
    ];

    return of(parks);
  }
}
