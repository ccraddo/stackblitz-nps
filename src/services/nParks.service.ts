import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Park } from '../models/park.model';

@Injectable({
  providedIn: 'root',
})
export class NParksService {
  private apiUrl = 'https://developer.nps.gov/api/v1/parks';
  private apiKey = '1T13AAJXeIa5ntPELEl2kMNRMjMcnf0lLmzI6SGd'; // Replace with your API key

  constructor(private http: HttpClient) {}

  getParks(limit: number): Observable<any> {
    const url = `${this.apiUrl}?limit=${limit}&api_key=${this.apiKey}`;
    return this.http.get<Park[]>(url);
  }

  getParksByState(stateCode: string): Observable<any> {
    const url = `${this.apiUrl}?stateCode=${stateCode}&api_key=${this.apiKey}`;
    return this.http.get<Park[]>(url);
  }
}
