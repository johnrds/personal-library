function Book(title, author, pages_n, isReaded){
    this.title = title;
    this.author = author;
    this.pages_n = pages_n;
    this.isReaded = isReaded;
}

const bookCards = document.querySelector(".cards");

function addToLibrary(book){
    let card = document.createElement('div');
    let readed;
    card.classList.add("card");

    if (book.isReaded){
        readed = "checked"
    }

    card.innerHTML = `
    <div class="title">${book.title}</div>
    <div class="author">By: ${book.author}</div>
    <div class="pages">${book.pages_n} Pages</div>


    <div class="control">
        <div class="tottleBox">
            <span>Mark as read:</span>
            <label class="switch">
                <input type="checkbox" ${readed}>
                <span class="slider round"></span>
            </label>
        </div>
        <button class="removeBtn">Remove</button>
    </div>`

    card.children[3].children[1].addEventListener("click", () => card.remove())

    bookCards.appendChild(card);
    
}


const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
addToLibrary(theHobbit);

const HarryPotter = new Book('Harry Potter', 'J.K Rolling', 356, true);
addToLibrary(HarryPotter);