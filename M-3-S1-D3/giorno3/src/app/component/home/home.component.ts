import { Component } from '@angular/core';
import { iArticle  } from '../../models/article';
import { iPost } from '../../models/ipost';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

articleArr:iPost[]=[]
firstPost!:iPost;
  randomPosts:iPost[] = [];

  ngOnInit(){

    this.getArticle().then(()=>{

      let firstPost = this.getFirstPost() //esegue la funzione e recupara il primo

      if(firstPost){ //se firstst post c'è allora diventa il primo elemento dell'array
        this.firstPost = firstPost
      }

      this.randomPosts = this.getRandomPosts()

    })


  }

  async getArticle(){
let response =await fetch ("../../../assets/db.json")
let artic= <iArticle> await response.json() //iPost è l'oggetto principale



this.articleArr = artic.posts //qui con il nome dell'array vado a recuperare l'array interno dell'oggetto per usarlo
console.log(this.articleArr)





}

  getFirstPost(){
    return this.articleArr.shift() //prende il primo elemento dell'array e lo rimuove ritornandolo
  }

  //funzione che cicla l'array e restituisce 4 risultati
  getRandomPosts(): iPost[] {
    const shuffled = [...this.articleArr].sort(() => 0.5 - Math.random()); //clono array e lo mescolo
    return shuffled.slice(0, 4); //seleziono i primi 4 e li ritorno
  }



  }






