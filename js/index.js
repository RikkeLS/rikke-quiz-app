console.clear()

// query selection:
// const bookmark = document.querySelector('[data-js="card__bookmark"]');
const bookmarks = document.querySelectorAll('[data-js="card__bookmark"]');
const answerButtons = document.querySelectorAll('[data-js="card__button-answer"]');
// const answersToHide = document.querySelectorAll('[data-js="card__answer"]');
const cards = document.querySelectorAll('[data-js="card"]');


bookmarks.forEach( bookmark => {
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
    })
} );


// click event for answer button, for hiding answer and change button text:



cards.forEach(card => {   
    const answerButton = card.querySelector('[data-js="card__button-answer"]');
    const answerToHide = card.querySelector('[data-js="card__answer"]');
    answerButton.addEventListener('click', (event) => {
        answerToHide.toggleAttribute('hidden')
        
        if (answerToHide.hidden==true) {
            answerButton.textContent = 'Show Answer'
        }
        if (answerToHide.hidden==false) {
            answerButton.textContent = 'Hide Answer'
        }
    });
});
