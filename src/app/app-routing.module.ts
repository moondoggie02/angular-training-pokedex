import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PDetailComponent } from './p-detail/p-detail.component';
import { PListComponent } from './p-list/p-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/page/1', pathMatch: 'full'},
  { path: 'page/:pageNumber', component: PListComponent},
  { path: 'detail/:id', component: PDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
