import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../../models/posts.interface'


@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private endpoint = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  loadPosts(): Observable<IPost[]> {
    return this.http.get(this.endpoint) as Observable<IPost[]>
  }

  getPostById(postId: number): Observable<IPost> {
    return this.http.get(this.endpoint + `/${postId}`) as Observable<IPost>;
  }
}