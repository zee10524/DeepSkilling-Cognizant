import { Component, OnInit } from '@angular/core';
import { User, Post, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[] = [];
  posts: Post[] = [];
  activeTab = 'users';
  loading = false;
  error = '';
  newPost = { title: '', body: '', userId: 1 };
  successMsg = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true; this.error = '';
    this.userService.getUsers().subscribe({
      next: (data) => { this.users = data; this.loading = false; },
      error: (err) => { this.error = err.message; this.loading = false; }
    });
  }

  loadPosts(): void {
    this.loading = true; this.error = '';
    this.userService.getPosts().subscribe({
      next: (data) => { this.posts = data; this.loading = false; },
      error: (err) => { this.error = err.message; this.loading = false; }
    });
  }

  createPost(): void {
    if (!this.newPost.title) return;
    this.userService.createPost(this.newPost).subscribe({
      next: (post) => {
        this.successMsg = `Post created with ID: ${post.id}`;
        this.newPost = { title: '', body: '', userId: 1 };
        setTimeout(() => this.successMsg = '', 3000);
      },
      error: (err) => this.error = err.message
    });
  }

  deletePost(id: number): void {
    this.userService.deletePost(id).subscribe({
      next: () => { this.posts = this.posts.filter(p => p.id !== id); },
      error: (err) => this.error = err.message
    });
  }

  switchTab(tab: string): void {
    this.activeTab = tab;
    this.error = '';
    if (tab === 'posts') this.loadPosts();
  }
}
