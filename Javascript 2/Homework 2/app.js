/* 1.1
Declare array with 10 strings 

const bookTitle = [
  "purple_hibiscus", //chimamanda_adichie_
  "things_fall_apart", //chinua_achebe_
  "freshwater", //akwaeke_emezie_
  "kindred", //octavia_butler_
  "and_then_there_were_none", //agatha_christie_
  "second_class_citizen", //buchi_emecheta_
  "pride_and_prejudice", //jane_austen_
  "my_sister_the_serial_killer", //oyinkan_braithwaite_
  "to_kill_a_mockingbird", //harper_lee_
  "lord_of_the_flies", //william_golding_
];
*/

/* 1.3
Create function that generate ul with li
function getBookName() {
  for (let i = 0; i < bookTitle.length; i++) {
   bookTitle[i];
    listElement.innerHTML += `<li>${bookTitle[i]}</li>`;
  }

  return listElement;
}
getBookName());
document.body.appendChild(listElement);
*/

"use strict";

let bookInfo = {
  one: {
    title: "Purple Hibiscus",
    author: "Chimamanda Ngozi Adichie",
    date: "2003",
    language: "English",
    link: "https://www.bokus.com/bok/9780007189885/purple-hibiscus/",
  },
  two: {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    date: "1958",
    language: "English",
    link: "https://www.bokus.com/bok/9780141023380/things-fall-apart/",
  },
  three: {
    title: "Freshwater",
    author: "Akwaeke Emezie",
    date: "2018",
    language: "English",
    link: "https://www.bokus.com/bok/9780571345403/freshwater/",
  },
  four: {
    title: "Kindred",
    author: "Octavia E. Butler",
    date: "1979",
    language: "English",
    link: "https://www.bokus.com/bok/9781472258229/kindred/",
  },
  five: {
    title: "And Then There Were None",
    author: "Agatha Christie",
    date: "1939",
    language: "English",
    link: "https://www.bokus.com/bok/9780007136834/and-then-there-were-none/",
  },
  six: {
    title: "Second Class Citizen",
    author: "Buchi Emecheta",
    date: "1974",
    language: "English",
    link: "https://www.bokus.com/bok/9780435909918/second-class-citizen/",
  },
  seven: {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    date: "1813",
    language: "English",
    link: "https://www.bokus.com/bok/9780141199078/pride-and-prejudice/",
  },
  eight: {
    title: "My Sister, The Serial Killer",
    author: "Oyinkan Braithwaite",
    date: "2018",
    language: "English",
    link: " https://www.bokus.com/bok/9781786495983/my-sister-the-serial-killer/",
  },
  nine: {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    date: "1960",
    language: "English",
    link: "https://www.bokus.com/bok/9780099549482/to-kill-a-mockingbird/",
  },
  ten: {
    title: "Lord of the Flies",
    author: "William Goulding",
    date: "1954",
    language: "English",
    link: "https://www.bokus.com/bok/9780571191475/lord-of-the-flies/",
  },
};

console.log(bookInfo);

/* 1.7 image source */

bookInfo.one.image = "./images/Purple_Hibiscus.jpg";
bookInfo.two.image = "./images/ThingsFallApart.jpg";
bookInfo.three.image = "./images/freshwater.jpg";
bookInfo.four.image = "./images/kindred.jpg";
bookInfo.five.image = "./images/andthentherewerenone.jpg";
bookInfo.six.image = "./images/second-class-citizen.jpg";
bookInfo.seven.image = "./images/prideandprejudice.jpg";
bookInfo.eight.image = "./images/mysistertheserialkiller.jpg";
bookInfo.nine.image = "./images/tokillamockingbird.jpg";
bookInfo.ten.image = "./images/lordoftheflies.jpg";

// Object.keys(bookInfo);
// console.log(Object.keys(bookInfo));

/** 1.5  create a function */

const body = document.querySelector("body");

//create header
const headingOne = document.createElement("h1");
headingOne.setAttribute("id", "heading-one");
headingOne.textContent = "BookStore";
document.body.appendChild(headingOne);

//

const headingTwo = document.createElement("h2");
headingTwo.setAttribute("class", "heading-two");
headingTwo.textContent = "Top Choices";
document.body.appendChild(headingTwo);

// const purchaseInfo = document.createElement("span");
// purchaseInfo.setAttribute("class", "purchase-info");
// purchaseInfo.textContent = "Click Button for direct purchase";
// document.body.appendChild(purchaseInfo);

//
const bookContainer = document.createElement("div");
bookContainer.setAttribute("class", "book-container");
document.body.appendChild(bookContainer);
//console.log(bookContainer);

// create function
function getBookList() {
  const bookListContainer = document.createElement("ul");
  bookListContainer.setAttribute("class", "book-list-container");
  bookContainer.appendChild(bookListContainer);

  for (const key in bookInfo) {
    let bookList = document.createElement("li");
    bookList.setAttribute("class", "novel");
    bookListContainer.appendChild(bookList);

    let bookTitle = document.createElement("h2");
    bookTitle.innerText = bookInfo[key].title;
    bookList.appendChild(bookTitle);

    let bookImage = document.createElement("img");
    bookImage.src = bookInfo[key].image;
    bookList.appendChild(bookImage);

    /* add a button to purchase book from Bokus */
    // first create a button element
    const myButton = document.createElement("button");
    myButton.innerText = "Purchase Book";
    bookList.appendChild(myButton);

    // add event listener
    myButton.addEventListener("click", function onclick() {
      location.href = bookInfo[key].link;
      //myButton.remove(); use to remove button after click
      bookList.appendChild(buttonElement);
    });

    let bookAuthor = document.createElement("p");
    bookAuthor.innerText = "Author: " + bookInfo[key].author;
    bookList.appendChild(bookAuthor);

    let bookDate = document.createElement("p");
    bookDate.innerText = "Publish Date: " + bookInfo[key].date;
    bookList.appendChild(bookDate);

    let bookLanguage = document.createElement("p");
    bookLanguage.innerText = "Language: " + bookInfo[key].language;
    bookList.appendChild(bookLanguage);
  }
}
getBookList();
