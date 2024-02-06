const textSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

textSize.addEventListener('input', () => {
    text.style.fontSize = `${textSize.value}px`
});