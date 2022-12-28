import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  constructor(private gifsService: GifsService) { }

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  search(): void {
    const value = this.txtSearch.nativeElement.value;
    if(value.trim().length === 0) return;
    this.gifsService.addHistory(value);
    this.txtSearch.nativeElement.value = '';
  }

}
