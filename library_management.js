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

