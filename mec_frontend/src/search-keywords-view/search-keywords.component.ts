import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-keywords',
  templateUrl: './search-keywords.component.html',
  styleUrls: ['./search-keywords.component.css']
})
export class SearchKeywordsComponent {

  @Input()
  keywords = 'phone';

  searchKeywords() {
    console.log('searchKeywords: ', this.keywords);
  }
}
