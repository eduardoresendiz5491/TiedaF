import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiendaServiceService {
  URI: string = "http://localhost:3000";

  constructor( private httpClient: HttpClient) { }

  getMarket(){
    return this.httpClient.get(`${this.URI}/tienda`)
  }
  getSpecificMarket(id: string){
    return this.httpClient.get(`${this.URI}/tienda/${id}`);
  }
  createMarket(body){
    return this.httpClient.post(`${this.URI}/tienda/create`,body)
  }
  updateMarket( id, body){
    return this.httpClient.put(`${this.URI}/tienda/${id}`,body)
  }
}
