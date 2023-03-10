const myLibrary = [];

const form = document.getElementById('inputForm');
const subBtn = document.getElementById('subBtn');

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

// add a book to the page and update the book array
function addBookToPage() {
  const display = document.getElementById('wrapper');
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => display.removeChild(card));
  myLibrary.forEach((book) => createBook(book));
}
addBookToPage();

// add a book to the library array
function addBookToLibrary() {
  subBtn.addEventListener('click', (Event) => {
    Event.preventDefault();
    const newBook = new Book(
      form.name.value,
      form.author.value,
      form.pages.value
    );
    myLibrary.push(newBook);
    addBookToPage();
    form.reset(); // clear the form input fields
  });
}
addBookToLibrary();

function createBook(newBook) {
  const display = document.getElementById('wrapper');
  const card = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pagesDiv = document.createElement('div');
  const readDiv = document.createElement('div');
  const delDiv = document.createElement('div');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('h3');
  const bookPages = document.createElement('h3');
  const bookRead = document.createElement('button');
  const del = document.createElement('button');

  card.classList.add('card');

  display.appendChild(card);
  card.append(titleDiv);
  card.append(authorDiv);
  card.append(pagesDiv);
  card.append(readDiv);
  card.append(delDiv);
  titleDiv.append(bookTitle);
  authorDiv.append(bookAuthor);
  pagesDiv.append(bookPages);
  readDiv.append(bookRead);
  delDiv.append(del);

  bookTitle.textContent = `Title: ${newBook.title}`;
  bookAuthor.textContent = `Author: ${newBook.author}`;
  bookPages.textContent = `Pages: ${newBook.pages} pages`;
  bookRead.innerText = 'READ?';
  bookRead.classList.add('readBtn');
  del.innerText = 'X';
  del.classList.add('del');

  // added thses event listner function here to make use of CLOSURE
  bookRead.addEventListener('click', () => {
    card.style.border = '3px solid green';
    bookRead.style.backgroundColor = 'blue';
    bookRead.textContent = 'You read this book!';
  });

  del.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(newBook), 1);
    addBookToPage();
  });
}

const addBtn = document.getElementById('addBtn');

// hide the input form
addBtn.addEventListener('click', () => {
  if (form.style.display === 'block') {
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
});
