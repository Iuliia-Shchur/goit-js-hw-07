const inputFontEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


const onInputFontChange = (event) => {
    text.style.fontSize = event.currentTarget.value + 'px';
};

inputFontEl.addEventListener('input', onInputFontChange);
