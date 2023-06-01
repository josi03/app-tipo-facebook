import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  autore: string = '';
  testo: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    const newPost = {
      author: this.autore,
      text: this.testo,
      likes: 0,
      comments: []
    };

    this.http.post('https://my-json-server.typicode.com/PaoloCarugati/facebook/comments', newPost).subscribe(() => {
      
    });
  }
}


