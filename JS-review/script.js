const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const book = getBook(3);
// const title = book.title;
// const authon = book.author;
const {title, author, genres, publicationDate, pages, hasMovieAdaptation} = book;
book;
console.log(title, author);
// const primaryGenres = genres[0];
// const secondaryGenres = genres[1];
const [primaryGenres,secondaryGenres, ...otherGeneres] = genres;
console.log(primaryGenres,secondaryGenres, otherGeneres);

//const newGenere = [...genres, 'otro genero']; //agrega al final
const newGenere = ['otro genero', ...genres]; //lo agrega al principio
newGenere
const updateBook = {...book, 
  moviePublicationDate: '2023-03-03',// adding a new property
pages:120 // overwriting an existing property
};
updateBook;


const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));


//here we can call a function between {} or anything else
const summary = `${title} is a book written by ${author} whith geneder ${genres[0]} adding something ${8+6}
 published in ${getYear(publicationDate)} is  ${hasMovieAdaptation ? "":"not"} addapted like a movie`;
summary

console.log(`the book has ${pages > 1000 ? "over a thousand" : "less than thousand"}`);

console.log(true && "return this");
console.log(false && "returne false");

console.log(hasMovieAdaptation && "is a movie");

//falsy values = null, undefined, "", 0
//here it work like an if or the && that see before, if the value is not falsy show the thing
console.log('xx' && "traducido");

// or operator
console.log(true || "tour guide");
console.log(false || "tour guide");

console.log(book.translations.spanish);

const translate = book.translations.portuguese || "NO TRADUCIDO al portugues";
translate;
 
// console.log(book.reviews.librarything.reviewsCount);
// const revewbad = book.reviews.librarything.reviewsCount || "Not revewcount";
// revewbad; //bad because must show 0 

//so there is a new operator called coalescing similar al || but contempla los valores 0 o "" como posibles no falsos

// const revewwell = book.reviews.librarything.reviewsCount ?? "Not revewcount";
// revewwell; //now is well because have to show 0

function getAllReviewCount(book){
  const goodreads = book?.reviews?.goodreads?.reviewsCount;
  const librarythingrevews = book?.reviews?.librarything?.reviewsCount ?? 0
  ;// el signo de pregunta quiere decir
  //que va a continuar solo si existe lo anterior(librarything x example) sino da error y esto lo evita
  //los ultimos dos signos de preguna son el operador nuevo coalescing
  return goodreads + librarythingrevews;
}
console.log(getAllReviewCount(book));
*/
/*
function getAllReviewCount(book){
  const goodreads = book?.reviews?.goodreads?.reviewsCount;
  const librarythingrevews = book?.reviews?.librarything?.reviewsCount ?? 0
  ;// el signo de pregunta quiere decir
  //que va a continuar solo si existe lo anterior(librarything x example) sino da error y esto lo evita
  //los ultimos dos signos de preguna son el operador nuevo coalescing
  return goodreads + librarythingrevews;
}
const books =  getBooks();
books;
// const x = [1, 2, 3, 4, 5, 6].map((element) => element*2);
// console.log(x); 

const titles = books.map((books) => books.title);
console.log(titles)

const esencialData = books.map((book) => ({  //con este parentesis antes de la llave evitamos el return
    title : book.title,
    author : book.author,
    reviews : getAllReviewCount(book)
}));
esencialData;

const longBookswhidtMovie = books.
  filter((book) => book.pages>500 && getAllReviewCount(book)>15000).
  filter((book =>book.hasMovieAdaptation));
console.log(longBookswhidtMovie);

const adventureBook = books.filter((books => books.genres.includes("adventure"))).map((books) =>books.title);
adventureBook

//reduce method for array

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages,0);
pagesAllBooks

//sort method
//de esta manera cambia tambien el array original y no queremos eso...
const x = [6,5,7,1,4,9];
const sortx = x.sort((a,b) => a-b); // orden ascendente
sortx
x
// para evitar que esto pase se utiliza el copiar el array a uno nuevo y luego ordenar
const sortxs = x.slice().sort((a,b) => b-a); // orden descendente
sortxs
x

const bookSortedByPages = books.slice().sort((b, a) => a.pages - b.pages).map((books) => ({
  author : books.author,
  title : books.title,
  pages : books.pages
}));

bookSortedByPages


// Add a book object at the array 
const newBook = {
  id: 6,
  title : "Harry Potter and The Chamber of Secrets",
  author : "J. K. Rolling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd

// Delete a book object at the array
const booksAfterDelete = booksAfterAdd.filter((books)=> books.id != 3);//.map((books) => books.id);
booksAfterDelete;

// update book in the array

const booksAfterUpdate = booksAfterDelete.map(book => 
  book.id === 1 ? {...book, pages : 999 } : book
  );

booksAfterUpdate;
*/


//promeses

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then(data => console.log(data));
// function calculate(){
//   let numeros = require('bignumber.js');
//   numeros = [2023,2024,2025];
//   let numeroCalculado = require('bignumber.js') ;
//   for (i = 0; i<=10050; i++){
//     numeroCalculado = numeros[i]+numeros[i+1]+ numeros[i+2]; 
//     numeros.push(numeroCalculado);

//   };
//   console.log(numeros)
//   let variable =  (numeros[i].toString());
//   let result = variable.slice(-4); 
//   console.log(result); 
// }

async function getTodos(){
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}
// calculate();
getTodos()
