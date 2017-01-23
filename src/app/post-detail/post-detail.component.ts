import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
  postId: number = null;
  posts: Post[];
  selectedPost: Post;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.route.params.forEach((urlParametersArray) => {
      this.postId = parseInt(urlParametersArray['id']);
    })
    this.selectedPost= this.postService.getPostById(this.postId);

  }

}
