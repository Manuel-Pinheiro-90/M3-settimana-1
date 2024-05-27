import { Component, OnInit } from '@angular/core';
import { iPost } from '../../models/ipost';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'] // Correzione di "styleUrl" in "styleUrls"
})
export class InactivePostsComponent implements OnInit { // Implementazione di OnInit
  inactivePostArr: iPost[] = [];

  constructor(private postsSvc: PostsService) {}

  ngOnInit() {

      this.inactivePostArr = this.postsSvc.getInactiveArticles();

    }


  }

