const listWithId = document.querySelector('#categories');

const listItemsByClassName = document.querySelectorAll('li.item');

console.log("Number of categories: " + listItemsByClassName.length);

listItemsByClassName.forEach(element => {
    console.log("Category: " + element.querySelector("h2").textContent)
    const subelems = element.querySelectorAll('li')
    console.log("Elements: " + subelems.length)
});