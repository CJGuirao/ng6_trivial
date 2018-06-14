import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseURL = 'https://opentdb.com/api.php?amount=1';

  constructor(private http: HttpClient) { }

  getRequest(url?: string): Observable<any> {

    if (url) {
      return this.http.get(url);
    } else {
      return this.http.get(this.baseURL);
    }
  }
}
