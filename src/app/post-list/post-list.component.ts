import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://my-json-server.typicode.com/PaoloCarugati/facebook/comments').subscribe((response) => {
      this.posts = response;
    });
  }

  likePost(post: any) {
    post.likes++;
  }
}


