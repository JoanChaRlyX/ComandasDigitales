import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { Platillo } from './platillo';

@Injectable()
export class PlatilloService {
  private urlEndPoint: string = 'http://localhost:8080/api/platillos';

  constructor(private http: HttpClient) { }

  getPlatillos(): Observable<Platillo[]>{
    return this.http.get<Platillo[]>(this.urlEndPoint);
  }
}