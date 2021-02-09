import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostsService]
})
export class PostsComponent implements OnInit {
  posts:any = []
  poste_data: any =[]
  constructor(private postservice:PostsService) { }

  ngOnInit() {
    this.postservice.getAllPosts().subscribe(posts=>
      {
        this.posts=posts["result"];


      })
  }

}
