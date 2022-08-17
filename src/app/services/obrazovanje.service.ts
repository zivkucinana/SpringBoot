import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OBRAZOVANJE_URL } from '../constants';
import { Obrazovanje } from '../models/obrazovanje';

@Injectable({
  providedIn: 'root'
})
export class ObrazovanjeService {

  constructor(private httpClient: HttpClient) { }

  public getAllObrazovanje(): Observable<any>{
    return this.httpClient.get(`${OBRAZOVANJE_URL}`);;
  }

  public addObrazovanje (obrazovanje:Obrazovanje): Observable<any> {
    obrazovanje.id = 88;
   return this.httpClient.post(`${OBRAZOVANJE_URL}`, obrazovanje);
  

  }

  public updateObrazovanje (obrazovanje:Obrazovanje): Observable<any> {
    return this.httpClient.put(`${OBRAZOVANJE_URL}`, obrazovanje);
 
   }

   public deleteObrazovanje (id:number): Observable<any> {
    return this.httpClient.delete(`${OBRAZOVANJE_URL}/${id}`);
 
   }
}
