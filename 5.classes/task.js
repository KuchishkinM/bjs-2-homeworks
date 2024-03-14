class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  };

  fix() {
    return this.state *= 1.5
  };

  set state(num) {
    if (num < 0) {
      this._state = 0
    } else if (num > 100) {
      this._state = 100
    } else (
      this._state = num
    )
  };

  get state() {
    return this._state
  };
};

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
};

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = "book";
  }
};

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state)
    this.type = "novel";
  }
};

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state)
    this.type = "fantastic";
  }
};

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state) {
    super(author, name, releaseDate, pagesCount, state)
    this.type = "detective";
  }
};

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  };

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book)
    }
  };

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  };

  giveBookByName(bookName) {
    let book = this.books.find(book => book.name === bookName)
    if (!book) {
      return null
    }
    this.books = this.books.filter((el) => el.name !== bookName);
    return book;
  };
};


class Student {
  constructor(name,) {
    this.name = name;
    this.marks = {};
  };

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      console.log('Некорректная оценка!!!')
    } else if (subject in this.marks) {
      this.marks[subject].push(mark)
    } else {
      this.marks[subject] = [mark]
    }
  };

  getAverageBySubject(subject) {
    if (subject in this.marks) {
      return this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length;
    } else {
      return 0
    }
  };

  getAverage() {

    let subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0
    }
    let sum = 0;
    for (let i = 0; i < subjects.length; i++) {
      sum += this.getAverageBySubject(subjects[i])
    }
    return sum / subjects.length
  };
}
