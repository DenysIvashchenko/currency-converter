import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rate } from '../models/rate.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiUrl: string = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  constructor(private httpClient: HttpClient) { }

  getCurrency(): Observable<any> {
    return this.httpClient.get<Rate[]>(this.apiUrl);
  }
}
