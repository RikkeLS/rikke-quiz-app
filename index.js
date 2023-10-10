console.clear()

// query selection:
const bookmark = document.querySelector('[data-js="card__bookmark"]');
const answerButton = document.querySelector('[data-js="card__button-answer"]');
const answerToHide = document.querySelector('[data-js="card__answer"]');
const questionForm = document.querySelector('[data-js="form-question"]');

// click event for bookmark with arrow function:
bookmark.addEventListener('click', (event)=> {
    const currentBookmark = bookmark.src; // gives a longer path, https://'more'
    // cutting the string into just the filename
    currentImageFilename=currentBookmark.split("/")[currentBookmark.split("/").length-1]
    // gives a path which does not need to be cut
    // const currentBookmark = bookmark.getAttribute('src') 

    if (currentImageFilename === "bookmark_filled.png") {
        bookmark.src = "./resources/bookmark.png"  
    }
    if (currentImageFilename === "bookmark.png") {
        bookmark.src = "./resources/bookmark_filled.png"  
    }
});

// click event for answer button, for hiding answer and change button text:
answerButton.addEventListener('click', (event) => {
    answerToHide.toggleAttribute('hidden')
    
    if (answerToHide.hidden==true) {
        answerButton.textContent = 'Show Answer'
    }
    if (answerToHide.hidden==false) {
        answerButton.textContent = 'Hide Answer'
    }
});

// get data from the form to create a card
// questionForm.addEventListener('submit', (event) => {
    
// });