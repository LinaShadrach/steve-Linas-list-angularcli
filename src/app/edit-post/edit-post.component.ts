import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [PostService]
})
export class EditPostComponent implements OnInit {
  postId: number = null;
  posts: Post[];
  selectedPost: Post;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }
  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.route.params.forEach((urlParametersArray) => {
      this.postId = parseInt(urlParametersArray['id']);
    })
    this.selectedPost= this.postService.getPostById(this.postId);
    console.log(this.selectedPost.title);
  }

  editPost(title: string, description: string, imgURL: string, price: number) {
    this.postService.editPost(title, description, imgURL, price, this.postId);
  }

}
