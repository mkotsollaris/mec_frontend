import { SearchService } from './../services/search-keyword.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from "@angular/common";

@Component({
  selector: 'app-search-keywords',
  templateUrl: './search-keywords.component.html',
  styleUrls: ['./search-keywords.component.css']
})
export class SearchKeywordsComponent implements OnInit {

   constructor(
    public searchService: SearchService,
    private router: Router,
    private location: Location
  ) { }

 ngOnInit() {
   this.router.navigateByUrl('/')
            .then(() => {
                this.router.navigate(['./'], {
                    replaceUrl: true,
                });
            });
    this.location.subscribe(x => {
      console.log(x);
      this.keywords = x.url.split('/').join('');
      if(this.keywords !== '') {
        this.searchKeywords();
      } else {
        this.searchService.results = [];
      }
    });
}

  @Input()
  keywords = '';

  searchKeywords() {
    let response = this.searchService.searchKeywords(this.keywords);
    response.then(response => {
      let urlSuffix = this.keywords;
      // hacky workdaround for the back button to work.
      // FIXME tracking angular bug https://github.com/angular/angular/pull/19374
      this.router.navigateByUrl('/')
            .then(() => {
                this.router.navigate([urlSuffix], {
                    replaceUrl: true,
                });
            });
    });
  }
}
