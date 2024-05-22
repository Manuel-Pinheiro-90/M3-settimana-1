import { Component } from '@angular/core';
import { iArticle, iPost } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

articleArr:iArticle[]=[]

  ngOnInit(){

    this.getArticle()


  }

  async getArticle():Promise<void>{
let response =await fetch ("../../../assets/db.json")
let articles= <iPost> await response.json() //iPost è l'oggetto principale
console.log("fino qui",articles)


this.articleArr = articles.posts //qui vado a recuperare l'array interno per usarlo

  }




  randomArray():void{


  }





}
