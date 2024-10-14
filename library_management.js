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

// task 3

//create patron classz
class Patron {
    constructor(name) {
      this.name = name;
      this.borrowedBooks = [];
    }
  
    borrowBook(book) {
      if (book.isAvailable) {
        book.isAvailable = false;
        this.borrowedBooks.push(book);
        console.log(`${this.name} borrowed "${book.title}".`);
      } else {
        console.log(`Sorry, "${book.title}" is already borrowed.`);
      }
    }
  
    returnBook(book) {
      const index = this.borrowedBooks.indexOf(book);
      if (index > -1) {
        this.borrowedBooks.splice(index, 1);
        book.isAvailable = true;
        console.log(`${this.name} returned "${book.title}".`);
      } else {
        console.log(`${this.name} did not borrow "${book.title}".`);
      }
    }
  }

// task 4

//create VIP class
class VIPPatron extends Patron {
    constructor(name, priority) {
      super(name);
      this.priority = priority;
    }
  
    borrowBook(book) {
      if (book.isAvailable) {
        book.isAvailable = false;
        this.borrowedBooks.push(book);
        console.log(`${this.name} (VIP) borrowed "${book.title}".`);
      } else {
        console.log(`Sorry, "${book.title}" is already borrowed.`);
      }
    }
  }

//task 5

//handle borrowing & returning
Section.prototype.calculateTotalBooksAvailable = function() {
    return this.getAvailableBooks();
  };

//task 6

//create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// make books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// add books to section
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// make patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);

regularPatron.borrowBook(book1);

vipPatron.borrowBook(book1);

regularPatron.returnBook(book1);

fiction.listBooks();

//calc total avail 
console.log(`Total available books in Fiction: ${fiction.calculateTotalBooksAvailable()}`);
console.log(`Total available books in Science: ${science.calculateTotalBooksAvailable()}`);