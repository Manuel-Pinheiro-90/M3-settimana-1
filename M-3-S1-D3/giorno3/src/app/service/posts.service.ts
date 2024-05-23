import { Injectable } from '@angular/core';
import { iArticle } from '../models/article';
import { iPost } from '../models/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  articleArr: iPost[] = [];

  constructor() {
    // Inizializzo il recupero degli articoli al momento della creazione del servizio
    this.getArticle();
  }

  async getArticle() {
    try {
      // Effettuo una richiesta per ottenere il file JSON contenente gli articoli
      const response = await fetch("../../../assets/db.json");
      if (!response.ok) {
        throw new Error(`Errore nel recupero degli articoli: ${response.statusText}`);
      }

      // Converto la risposta in formato JSON
      const artic = <iArticle>await response.json();

      // Recupero l'array di articoli dall'oggetto JSON
      this.articleArr = artic.posts;
    } catch (error) {
      console.error('Errore durante il recupero degli articoli:', error);
    }
  }

  // Metodo per ottenere gli articoli attivi
  getActiveArticles(): iPost[] {
    return this.articleArr.filter(apost => apost.active === true);
  }

  // Metodo per ottenere gli articoli inattivi
  getInactiveArticles(): iPost[] {
    return this.articleArr.filter(apost => apost.active === false);
  }

  // Metodo per ottenere un articolo tramite il suo ID
  getByid(id: number): iPost | undefined {
    return this.articleArr.find(apost => apost.id == id);
  }
}














