import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { city: string };
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`).pipe(catchError(this.handleError));
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}?_limit=10`).pipe(catchError(this.handleError));
  }

  createPost(post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post).pipe(catchError(this.handleError));
  }

  deletePost(id: number): Observable<{}> {
    return this.http.delete(`${this.postsUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg = 'An error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMsg = `Client error: ${error.error.message}`;
    } else {
      errorMsg = `Server error ${error.status}: ${error.message}`;
    }
    return throwError(() => new Error(errorMsg));
  }
}
