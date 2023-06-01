import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  posts: any[] = [];
  newPostAuthor: string = '';
  newPostText: string = '';
  newCommentAuthor: string = '';
  newCommentText: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.http.get<any[]>('API_URL/posts').subscribe((response) => {
      this.posts = response;
    });
  }

  submitPost() {
    const newPost = {
      author: this.newPostAuthor,
      text: this.newPostText,
      likes: 0,
      comments: []
    };

    this.http.post('API_URL/posts', newPost).subscribe(() => {
      this.loadPosts();
      this.newPostAuthor = '';
      this.newPostText = '';
    });
  }

  likePost(post: any) {
    post.likes++;
  }

  submitComment(post: any) {
    const newComment = {
      author: this.newCommentAuthor,
      text: this.newCommentText
    };

    post.comments.push(newComment);

    this.newCommentAuthor = '';
    this.newCommentText = '';
  }
}

