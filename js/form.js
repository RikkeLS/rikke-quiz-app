console.clear()

// query selection:
const questionForm = document.querySelector('[data-js="form-question"]');
const newQuestionsContainer = document.querySelector('[data-js="created-questions-container"]')
const charactersLeftQuestion = document.querySelector('[data-js="form__question-characters-left"]')
const charactersLeftAnswer = document.querySelector('[data-js="form__answer-characters-left"]')
const questionTextarea =  document.querySelector('[data-js="question-textarea"]')
const answerTextarea =  document.querySelector('[data-js="answer-textarea"]')

// get data from the form to create a card
questionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    formData = new FormData(event.target);
    dataObject = Object.fromEntries(formData);

    createCard(dataObject);
    //reset form after getting the data:
    questionForm.reset()
});

function createCard(dataObject) {
    const questionText=dataObject['newQuestionText'];
    const answerText=dataObject['newAnswerText'];
    const tagText=dataObject['newTagText'];
    // creating simple elements with given class:
    const cardElement = elementWithClass('section','card');
    const questionElement = elementWithClass('p','card__question');
    const answerToHide = elementWithClass('p','card__answer');
    const answerButton = elementWithClass('button','card__button-answer');
    // answerToHide.setAttribute('hidden',true);
    const hashtagContainer = elementWithClass('ul','card__hashtags-container');
    const hashtagElement = elementWithClass('li','card__hashtag-container__hashtag');
    const bookmark = elementWithClass('img','card__bookmark')
    
    // attributes for the image element for the bookmark:
    bookmark.setAttribute('src','./resources/bookmark.png');
    bookmark.setAttribute('alt','bookmark')




    //insert text in elements:
    questionElement.textContent = questionText;
    answerToHide.textContent = answerText;
    answerButton.textContent = 'Show Answer';
    answerButton.textContent = 'Hide Answer'
    // only add '#' if tag is entered:
    if (Boolean(tagText) === true) {
        hashtagElement.textContent = '#'+tagText;    
    }
    if (Boolean(tagText) === false) {
        hashtagElement.className='' ;// remove all classes     
    }
    


    //add data-js:
    answerButton.setAttribute("data-js","card__button-answer");
    answerToHide.setAttribute("data-js","card__answer");
    bookmark.setAttribute("data-js","card__bookmark");

    // append/nest the elements:
    hashtagContainer.append(hashtagElement)
    cardElement.append(bookmark,questionElement,answerButton,answerToHide,hashtagContainer)


    newQuestionsContainer.append(cardElement);

    //---- from index.js to do the button functions:

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
}

function elementWithClass(typeOfElement,className) {
    const newElement = document.createElement(typeOfElement);
    newElement.classList.add(className);
    return newElement;
}

//-- text characters left

function charactersLeft(event) {
    const charactersInText = event.target.value.length; 
    return numberOfCharactersLeft = 150-Number(charactersInText)
}
questionTextarea.addEventListener('input',(event) => {
    charactersLeftQuestion.textContent = charactersLeft(event)+' characters left';
});

answerTextarea.addEventListener('input',(event) => {
    charactersLeftAnswer.textContent = charactersLeft(event)+' characters left'

});


