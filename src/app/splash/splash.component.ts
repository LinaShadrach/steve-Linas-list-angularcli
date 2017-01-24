import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { ByPricePipe } from '../by-price.pipe';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [PostService]
})
export class SplashComponent implements OnInit {
  constructor(
    private router: Router,
    private postService: PostService
  ){}

  posts: Post[];
  filterPrice: number;
  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
  goToPostDetail(selectedPost: Post) {
    this.router.navigate(['posts', selectedPost.id]);
  };
  onPriceChange(optionFromMenu: number){
    this.filterPrice = optionFromMenu;
    console.log("change" + optionFromMenu);

  }

}
