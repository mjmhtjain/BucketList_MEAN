import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { List } from '../models/List';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  private serverApi = 'http://localhost:3000';

  public getAllLists(): Observable<Object> {

    let URI = `${this.serverApi}/bucketlist/`;
    return this.http.get(URI);
      // .map(res => res.json())
      // .map(res => <List[]>res.lists);
  }

  public deleteList(listId: string) {
    let URI = `${this.serverApi}/bucketlist/${listId}`;
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, { headers });
      // .map(res => res.json());
  }
}
