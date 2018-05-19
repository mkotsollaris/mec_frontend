import { SearchKeywordsComponent } from './search-keywords.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
   imports: [FormsModule],
   exports: [SearchKeywordsComponent],
   declarations: [SearchKeywordsComponent],
   providers: [],
})
export class SearchKeywordsModule { }
