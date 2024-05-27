import { Component, Input } from '@angular/core';
import { iPost } from '../../models/ipost';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

singlePostArray: iPost[]=[];

@Input() p!: iPost;




















}
