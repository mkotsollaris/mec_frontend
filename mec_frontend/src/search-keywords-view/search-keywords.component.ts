import { SearchService } from './../services/search-keyword.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-keywords',
  templateUrl: './search-keywords.component.html',
  styleUrls: ['./search-keywords.component.css']
})
export class SearchKeywordsComponent {

  @Input()
  keywords = 'phone';

  constructor(
    private searchService: SearchService,
  ) { }

  searchKeywords() {
    let response = this.searchService.searchKeywords(this.keywords);
    response.then(response => {
      console.log('response: ', this.searchService.results);
    });
  }


}
