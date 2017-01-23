import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  index: number;

  constructor() { }

  getPosts() {
    return POSTS;
  }

  getPostById(postId: number) {
    for(var i=0; i<POSTS.length; i++) {
      if(POSTS[i].id===postId){
        return POSTS[i];
      }
    }
  }

  addPost(newPost: Post) {
    POSTS.push(newPost);
  }

  deletePost(selectedPostId: number) {
    for(var i = 0; i < POSTS.length; i++) {
      if(POSTS[i].id === selectedPostId) {
        this.index = i;
      }
    }
    POSTS.splice(this.index, 1);
  }

  editPost(title, description, imgURL, price, id) {
    for(var i = 0; i < POSTS.length; i++) {
      if(POSTS[i].id === id) {
        this.index = i;
      }
    }
    POSTS[this.index] = new Post(title, description, imgURL, price, id);
  }
}
