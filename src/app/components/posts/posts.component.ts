import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts!: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  }
  isEdit: boolean = false;

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  onNewPost(post: Post){
    this.posts.unshift(post);
  }

  editPost(post: Post){
    this.currentPost = post;
    this.isEdit=true;
  }

  onUpdatedPost(post: Post){
    this.posts.forEach((curr, idx) => {
      if(post.id === curr.id){
        //do this to move the updated post to the top
        this.posts.splice(idx, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        }
      }
    });
  }

  deletePost(post: Post){
    if(confirm('Delete Permanently?')){
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((curr, idx) => {
          if(post.id === curr.id){
            this.posts.splice(idx, 1);
          }
        });
      })
    }
  }
}
