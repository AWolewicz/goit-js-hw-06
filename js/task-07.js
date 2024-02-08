const textSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = `${textSize.value}px`

textSize.addEventListener('input', () => {
    text.style.fontSize = `${textSize.value}px`
});