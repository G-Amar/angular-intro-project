import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  post!: Post;

  constructor(
    private route: ActivatedRoute, 
    private postService: PostService
  ) {

  }

  ngOnInit(): void {
    const id: any = Number(this.route.snapshot.paramMap.get("id"));
    this.postService.getPost(id).subscribe(post => {
      this.post = post;
    })
  }

}
