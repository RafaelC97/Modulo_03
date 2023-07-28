import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cosmetico } from '../models/cosmetico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CosmeticoService {

  constructor(private httpclient: HttpClient) { }

  public getCosmeticos() : Observable<Cosmetico[]>{
     return this.httpclient.get<Cosmetico[]>("http://localhost:8080/cosmeticos");
  }
}
