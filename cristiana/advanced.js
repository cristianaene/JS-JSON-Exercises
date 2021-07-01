// Iterate through the array of books. For each book, create a <p> element with the book title and author and append it to the page.
// Each book should have an image cover.
// Change the style of the book depending on whether you have read it or not.

// parse the JSON string into a js variable: this variable is an array of book objects
let books = JSON.parse(data);
console.table(books);

// loop though the book list

for (let i = 0; i < books.length; i++) {
    if(books[i].read == true) {
        // for each book creates a p element
        let p = `<p class="changestyle">${books[i].author} - ${books[i].title}</p>`;
        // append p element to the div
        document.getElementById("booklist").innerHTML += p;
    } else {
         // for each book creates a p element
         let p = `<p>${books[i].author} - ${books[i].title}</p>`;
         // append p element to the div
         document.getElementById("booklist").innerHTML += p;
    }
    let img = `<img src="${books[i].img}">`;
    document.getElementById("booklist").innerHTML += img;
}