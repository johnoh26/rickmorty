import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private currentCharacters: any;

  constructor(private http: HttpClient) { }

  setCharacters(characters: any) {
    this.currentCharacters = characters;
  }
  getCharacters(): any {
    return this.currentCharacters;
  }

  fetchCharacters(page: string = "0"): Observable<any> {
    const rickMortyApiUrl = 'https://rickandmortyapi.com/api/character'
    return this.http.get<any>(rickMortyApiUrl).pipe(
      catchError(this.handleError)
    )
  }

  fetchLocation(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    )
  }

  fetchImage(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error:HttpErrorResponse) {
    return throwError(`${error.message}`);
  }
}
