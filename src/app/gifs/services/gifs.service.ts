import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private history: string[] = [];

  get getHistory() {
    return [...this.history];
  }

  addHistory(query: string): void {
    query = query.trim().toLocaleLowerCase();
    if (!this.history.includes(query)) {
      this.history.unshift(query);
      this.history = this.history.splice(0, 10);
    }
  }

}