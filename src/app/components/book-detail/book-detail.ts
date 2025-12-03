import { Book, BookService } from '../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './book-detail.html',
  styleUrls: ['./book-detail.scss']
})
export class BookDetailComponent implements OnInit {
delete() {
throw new Error('Method not implemented.');
}


  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private router: Router,          // ✅ ADD Router here
    private bookService: BookService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const apiBooks$ = this.bookService.getBooks();

    apiBooks$.subscribe(apiBooks => {
      const localBooks = JSON.parse(localStorage.getItem('books') || '[]');
      const all = [...apiBooks, ...localBooks];
      this.book = all.find(b => b.id === id);
    });
  }

  deleteBook() {   // ✅ Correct function name
    if (this.book && confirm("Are you sure you want to delete this book?")) {
      this.bookService.deleteBook(this.book.id);
      this.router.navigate(['/']);     // ✅ Correct navigation
    }
  }

}
