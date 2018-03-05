import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

constructor(private http:HttpClient) {
    getAllJokes(){
        return this.http.get('https://api.chucknorris.io/jokes/random');
    }
 }
}