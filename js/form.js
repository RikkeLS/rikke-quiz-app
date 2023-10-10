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
    // console.log('submitted form');
    formData = new FormData(event.target);
    dataObject = Object.fromEntries(formData);
    // console.log(dataObject);
    createCard(dataObject);
});

function createCard(dataObject) {
    const questionText=dataObject['newQuestionText'];
    const answerText=dataObject['newAnswerText'];
    const tagText=dataObject['newTagText'];
    // creating simple elements with given class:
    const cardElement = elementWithClass('section','card');
    const questionElement = elementWithClass('p','card__question');
    const answerElement = elementWithClass('p','card__answer');
    const answerButton = elementWithClass('button','card__button-answer');
    // answerElement.setAttribute('hidden',true);
    const hashtagContainer = elementWithClass('ul','card__hashtags-container');
    const hashtagElement = elementWithClass('li','card__hashtag-container__hashtag');
    const bookmarkElement = elementWithClass('img','card__bookmark')
    
    // attributes for the image element for the bookmark:
    bookmarkElement.setAttribute('src','./resources/bookmark.png');
    bookmarkElement.setAttribute('alt','bookmark')




    //insert text in elements:
    questionElement.textContent = questionText;
    answerElement.textContent = answerText;
    answerButton.textContent = 'Show Answer';
    answerButton.textContent = 'Hide Answer'
    hashtagElement.textContent = '#'+tagText;


    //add data-js:
    answerButton.setAttribute('data-js','card__button-answer' )
    answerElement.setAttribute('data-js','card__answer' )
    bookmarkElement.setAttribute('data-js','card__bookmark')

    // append/nest the elements:
    hashtagContainer.append(hashtagElement)
    cardElement.append(bookmarkElement,questionElement,answerButton,answerElement,hashtagContainer)


    // console.log(card_element) 
    
    newQuestionsContainer.append(cardElement);
}

function elementWithClass(typeOfElement,className) {
    const newElement = document.createElement(typeOfElement);
    newElement.classList.add(className);
    return newElement;
}

//-- text characters left
// charactersLeftQuestion.value = '150 characters left'

questionTextarea.addEventListener('input',(event) => {
    const charactersInText = event.target.value.length; //questionTextarea.textContent.length
    
    numberOfCharactersLeft = 150-Number(charactersInText)
    // console.log(charactersLeftQuestion.value);
    charactersLeftQuestion.textContent = numberOfCharactersLeft+' characters left'
    console.log(charactersInText);
});

answerTextarea.addEventListener('input',(event) => {
    const charactersInText = event.target.value.length; //questionTextarea.textContent.length
    
    numberOfCharactersLeft = 150-Number(charactersInText)
    charactersLeftAnswer.textContent = numberOfCharactersLeft+' characters left'

});
