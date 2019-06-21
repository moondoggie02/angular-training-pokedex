import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PListComponent } from './p-list/p-list.component';
import { PDetailComponent } from './p-detail/p-detail.component';
import { PSearchComponent } from './p-search/p-search.component';
import { PListResultComponent } from './p-list-result/p-list-result.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PListComponent,
    PDetailComponent,
    PSearchComponent,
    PListResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
