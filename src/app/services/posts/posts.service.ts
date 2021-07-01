import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private endpoint = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  loadPosts() {
    // Add a request to get posts using `endpoint`
  }
}
