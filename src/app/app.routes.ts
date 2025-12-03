import { Routes } from '@angular/router';
import {  BookListComponent } from './components/book-list/book-list';
import {  BookFormComponent } from './components/book-form/book-form';
import {  BookDetailComponent } from './components/book-detail/book-detail';

export const routes: Routes = [
  { path: '', component: BookListComponent},        // home → book list
  { path: 'add-book', component: BookFormComponent },
  { path: 'book/:id', component: BookDetailComponent}
];
