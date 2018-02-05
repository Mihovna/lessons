/*var nodeElem = document.querySelector('.some-text');
nodeElem.innerText = 'текст';
nodeElem.onclick = function () {
    nodeElem.classList.add ('new-class');
}
*/

var main = document.querySelector('.main');
main.onclick = function () {
    main.classList.add('active');
    about.classList.remove('active');
    contacts.classList.remove('active');
    products.classList.remove('active');
    text.innerText = 'вы нажали на 1 ссылку';
};
var about = document.querySelector('.about');
about.onclick = function () {
    about.classList.add('active');
    main.classList.remove('active');
    contacts.classList.remove('active');
    products.classList.remove('active');
    text.innerText = 'вы нажали на 2 ссылку';
};
var contacts = document.querySelector('.contacts');
contacts.onclick = function () {
    contacts.classList.add('active');
    main.classList.remove('active');
    about.classList.remove('active');
    products.classList.remove('active');
    text.innerText = 'вы нажали на 3 ссылку';
};
var products = document.querySelector('.products');
products.onclick = function () {
    products.classList.add('active');
    main.classList.remove('active');
    about.classList.remove('active');
    contacts.classList.remove('active');
    text.innerText = 'вы нажали на 4 ссылку';
};
var text = document.querySelector('.text');
