import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get getHistory() {
    return this.gifsService.getHistory;
  }

  search(query :string): void {
    this.gifsService.searchGifs(query);
  }

}
