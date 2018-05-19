import { SearchKeywordsModule } from './../search-keywords-view/search-keywords.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchKeywordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
