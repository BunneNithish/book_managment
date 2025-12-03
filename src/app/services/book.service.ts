import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  publishedDate: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiURL = 'books.json';



  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL);
  }
  deleteBook(id: number): void {
  // get books user added manually
  let localBooks: Book[] = JSON.parse(localStorage.getItem('books') || '[]');

  const beforeLength = localBooks.length;

  // keep all books except the one with this id
  localBooks = localBooks.filter(b => b.id !== id);

  // if nothing changed, it was a default API book
  if (localBooks.length === beforeLength) {
    alert('Default sample books cannot be deleted (only user-added books).');
    return;
  }

  // save back to localStorage
  localStorage.setItem('books', JSON.stringify(localBooks));
}

}
