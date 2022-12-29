import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private urlService: string = 'http://api.giphy.com/v1/gifs'
  private apikey: string = 'aUHg4G1VgK2xeCTAeKDsDxZECpBUAtpY';

  private history: string[] = [];
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    this.history = JSON.parse(localStorage.getItem('gifsHistory')!) || [];
    this.results = JSON.parse(localStorage.getItem('gifsResults')!) || [];
  }


  get getHistory() {
    return [...this.history];
  }


  searchGifs(_query: string): void {
    _query = _query.trim().toLocaleLowerCase();

    if (!this.history.includes(_query)) {
      this.history.unshift(_query);
      this.history = this.history.splice(0, 10);
      localStorage.setItem('gifsHistory', JSON.stringify(this.history));
    }

    const params = new HttpParams()
    .set('api_key', this.apikey)
    .set('q', _query)
    .set('limit', '10');

    this.http.get<SearchGifsResponse>(`${this.urlService}/search`, { params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('gifsResults', JSON.stringify(this.results));
      })
  }

}