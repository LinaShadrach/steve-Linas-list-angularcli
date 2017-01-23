import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]

})
export class NewPostComponent {
  constructor(
    private postService: PostService
  ) {}
  posts = this.postService.getPosts();
  submitForm(title: string, description: string, imgURL: string, price: number) {
    var newPost: Post = new Post(title, description, imgURL, price, this.posts.length);
    this.postService.addPost(newPost);
  }
}
