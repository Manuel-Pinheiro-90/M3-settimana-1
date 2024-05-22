import { Component } from '@angular/core';
import { iArticle } from '../../models/article';

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
let articles= <iArticle[]> await response.json()
console.log(articles)


this.articleArr = articles

  }







}
