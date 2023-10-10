console.clear()

// query selection:

const bookmark = document.querySelector('[data-js="card__bookmark"]');


// click event for bookmark with arrow function:
bookmark.addEventListener('click', (event)=> {
    console.log('bookmark click');

    const currentBookmark = bookmark.src;
    currentImageFilename=currentBookmark.split("/")[currentBookmark.split("/").length-1]

    console.log(currentImageFilename);
    if (currentImageFilename === "bookmark_filled.png") {
        bookmark.src = "./resources/bookmark.png"  
    }
    if (currentImageFilename === "bookmark.png") {
        bookmark.src = "./resources/bookmark_filled.png"  
    }
});