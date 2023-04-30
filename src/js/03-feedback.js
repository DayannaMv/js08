import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = form.elements.email;
const textarea = form.elements.message;

input.addEventListener('input', throttle(storeInput, 500));
textarea.addEventListener('input', throttle(storeTextarea, 500));

function storeInput() {
  const inputValue = input.value;
  const feedbackFromState = {
    inputValue,
    textareaValue: textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFromState));
}

function storeTextarea() {
  const textareaValue = textarea.value;
  const feedbackFromState = {
    inputValue: input.value,
    textareaValue,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFromState));
}

form.addEventListener('submit', () => localStorage.removeItem('feedback-form-state'));
 


