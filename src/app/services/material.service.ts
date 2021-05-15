import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {throwError, Observable} from 'rxjs';
import {Material} from '../entities/material';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MaterialService {

  url = 'api/materials/';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };


  constructor(private http: HttpClient) {
    this.http = http;
  }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this.url).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError));
  }

  addMaterials(material: Material): Observable<Material>{
    return this.http.post<Material>(this.url, material, this.httpOptions)
      .pipe(
        tap(data=> console.log(data)),
        catchError(this.handleError)
      );
  }

  updateMaterials(material: Material): Observable<Material>{
    return this.http.put<Material>(this.url + material.id, material, this.httpOptions)
      .pipe(
        tap(data=> console.log(data)),
        catchError(this.handleError)
      );
  }

  deleteMaterials(id: Number): Observable<Material>{
    return this.http.delete<Material>(this.url + id, this.httpOptions)
      .pipe(
        tap(data=> console.log(data)),
        catchError(this.handleError)
      );
  }

  private handleError(error: any){
    return throwError(error);
  }

}
