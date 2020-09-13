import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const headersOption = new HttpHeaders({Accept: "application/json"});
            
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(public cliente: HttpClient) { }

  listaItems(): Observable<any>{
    return this.cliente.get<any>('/apidata/catalog/distribution',{headers:headersOption});
  }
}
