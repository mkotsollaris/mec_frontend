import { SearchService } from './../services/search-keyword.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-keywords',
  templateUrl: './search-keywords.component.html',
  styleUrls: ['./search-keywords.component.css']
})
export class SearchKeywordsComponent {

  @Input()
  keywords = '';

  constructor(
    private searchService: SearchService,
    private router: Router
  ) { }

  searchKeywords() {
    let response = this.searchService.searchKeywords(this.keywords);
    response.then(response => {
      //SomewhereElse
      // this.router.navigate(['./'+this.keywords]);
      this.router.navigate(['/SomewhereElse']);

    });
  }


}
