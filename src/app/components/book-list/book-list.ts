import { Book, BookService } from '../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.scss'],
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookservice: BookService) {}

  ngOnInit() {
    this.bookservice.getBooks().subscribe(apiBooks => {
      const localBooks = JSON.parse(localStorage.getItem('books') || '[]');
      this.books = [...apiBooks, ...localBooks];
    });
  }

  deleteBook(id: number) {
    if (confirm("Are you sure you want to delete this book?")) {
      this.bookservice.deleteBook(id);
      this.ngOnInit(); // refresh list
    }
  }
}
