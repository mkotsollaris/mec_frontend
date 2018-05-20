import { SearchKeywordsComponent } from './../search-keywords-view/search-keywords.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchService } from './../services/search-keyword.service';
import { SearchKeywordsModule } from './../search-keywords-view/search-keywords.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
      {path: ":id", component: SearchKeywordsComponent},


    // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SearchKeywordsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
