console.clear()

// query selection:
const bookmark = document.querySelector('[data-js="card__bookmark"]');
const answerButton = document.querySelector('[data-js="card__button-answer"]');
const answerToHide = document.querySelector('[data-js="card__answer"]');


// click event for bookmark with arrow function:
bookmark.addEventListener('click', (event)=> {
    const currentBookmark = bookmark.src;
    currentImageFilename=currentBookmark.split("/")[currentBookmark.split("/").length-1]

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