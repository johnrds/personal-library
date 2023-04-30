function Book(title, author, pages_n, isReaded) {
    this.title = title;
    this.author = author;
    this.pages_n = pages_n;
    this.isReaded = isReaded;
}

const bookCards = document.querySelector(".cards");

function addToLibrary(book) {
    let card = document.createElement('div');
    let readed;
    card.classList.add("card");

    if (book.isReaded) {
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

const newBookBtn = document.querySelector(".newBookBtn");
const formOverlay = document.querySelector(".formOverlay");
const bookForm = document.getElementById("form");
const formInputs = document.querySelectorAll("input");

newBookBtn.addEventListener("click", () => {
    formOverlay.classList.remove("hidden");
    bookForm.reset();
})

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addToLibrary(new Book(formInputs[0].value, formInputs[1].value, formInputs[2].value, formInputs[3].checked))
    formOverlay.classList.add("hidden")
})

formOverlay.addEventListener("click", (e) => {
    if (e.target.classList.value === "formOverlay") {
        formOverlay.classList.add("hidden")
    }
})

addToLibrary(new Book('The Hobbit', 'J.R.R Tolkien', 295, false));
addToLibrary(new Book('Harry Potter', 'J.K Rolling', 356, true));