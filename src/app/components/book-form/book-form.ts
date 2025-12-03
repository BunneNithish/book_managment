import { Book, BookService } from '../../services/book.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrls: ['./book-form.scss']
})
export class BookFormComponent {

  newBook: Book = {
    id: 0,
    title: '',
    author: '',
    publishedDate: '',
    description: ''
  };

  constructor(private router: Router) { }

  addBook() {
    // Local storage save (temporary, since mock API is READ-only)
    let books = JSON.parse(localStorage.getItem('books') || '[]');

    this.newBook.id = Date.now();
    books.push(this.newBook);

    localStorage.setItem('books', JSON.stringify(books));

    alert('Book added successfully!');
    this.router.navigate(['/']);
  }
}
