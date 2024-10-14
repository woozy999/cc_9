//cc 9

//task 1

// creating book class
class Book {
    constructor(title, author, ISBN) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this._isAvailable = true;
    }
  
    getDetails() {
      return `${this.title}, by ${this.author} (ISBN: ${this.ISBN})`;
    }
  
    get isAvailable() {
      return this._isAvailable;
    }
  
    set isAvailable(status) {
      this._isAvailable = status;
    }
  }

// task 2

//create section class
class Section {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    getAvailableBooks() {
      return this.books.filter(book => book.isAvailable).length;
    }
  
    listBooks() {
      this.books.forEach(book => {
        console.log(`${book.getDetails()} - ${book.isAvailable ? 'Available' : 'Borrowed'}`);
      });
    }
  }