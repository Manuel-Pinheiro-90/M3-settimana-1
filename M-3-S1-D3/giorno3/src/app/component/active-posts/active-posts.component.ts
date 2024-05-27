import { Component } from '@angular/core';
import { iPost } from '../../models/ipost';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {

  activePostArr: iPost[] = [];

  constructor(private postsSvc: PostsService) {}

  ngOnInit() {  this.activePostArr = this.postsSvc.getActiveArticles();}




  }

