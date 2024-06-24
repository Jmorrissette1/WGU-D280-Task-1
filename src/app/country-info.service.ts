import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryInfoService {

  constructor(private http: HttpClient) { }
  getWorldBankInfo(countryCode: string): Observable<any> {

    const url = `https://api.worldbank.org/v2/country/${countryCode}`;
    return this.http.get(url);

   }
}
