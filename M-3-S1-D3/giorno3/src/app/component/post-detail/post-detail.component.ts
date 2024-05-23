import { Component } from '@angular/core';
import { iPost } from '../../models/ipost';
import { PostsService } from '../../service/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostDetailComponent {
  selectedPost!:iPost


  constructor(
    private route: ActivatedRoute,
    private postsSvc:PostsService){}

    ngOnInit(){
      this.route.params.subscribe((params:any)=>{

        let idPost = this.postsSvc.getByid(params.id)

        if(idPost){this.selectedPost=idPost}
console.log(params)

      })
    }

}
