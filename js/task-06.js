const validationInputEl = document.querySelector('#validation-input');


validationInputEl.addEventListener('focus', onInputFocus);
validationInputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const validInputLength = Number(validationInputEl.getAttribute('data-length'));
  const valueInputEl = event.target.value;

  if (valueInputEl.length === validInputLength) {
    validationInputEl.classList.add('valid') 
} else {
    validationInputEl.classList.add('invalid')};
};

function onInputFocus() {
    validationInputEl.classList.remove('valid', 'invalid');
};