import { Routes } from '@angular/router';
import { SearchService } from './../services/search-keyword.service';
import { SearchKeywordsComponent } from './search-keywords.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
   imports: [BrowserModule, FormsModule, 
   ],
   exports: [SearchKeywordsComponent],
   declarations: [SearchKeywordsComponent,],
   providers: [SearchService],
})
export class SearchKeywordsModule { }
