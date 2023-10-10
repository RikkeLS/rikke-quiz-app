console.clear()

// query selection:
const questionForm = document.querySelector('[data-js="form-question"]');
const newQuestionsContainer = document.querySelector('[data-js="created-questions-container"]')


// get data from the form to create a card
questionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log('submitted form');
    formData = new FormData(event.target);
    dataObject = Object.fromEntries(formData);
    console.log(dataObject);

    createCard(dataObject);
});

function createCard(dataObject) {
    const questionText=dataObject['newQuestionText'];
    const answerText=dataObject['newAnswerText'];
    const tagText=dataObject['newTagText'];
    const card_element = elementWithClass('section','card')
    card_element.textContent = questionText;
    console.log(card_element) 
    
    newQuestionsContainer.append(card_element);
    // document.body.append(card_element);
}

function elementWithClass(typeOfElement,className) {
    const newElement = document.createElement(typeOfElement);
    newElement.classList.add(className);
    return newElement;
    // newElement
}
