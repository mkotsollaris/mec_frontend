import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class SearchService {
    apiRoot = 'http://localhost:8080/product/search&keywords=';
    results: any;
    loading: boolean;

  constructor(private http:Http) { 
    this.results = [];
    this.loading = false;
  }

  searchKeywords(keywords:string): any {
  let promise = new Promise((resolve, reject) => {
    let apiURL = this.apiRoot+keywords;
    return this.http.get(apiURL)
      .toPromise()
      .then(
        res => { // Success
          if(res['_body']) {
          this.results = res.json();
          }
          resolve();
        }
      );
  });
  return promise;
}

}
