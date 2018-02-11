var hidden = document.querySelector('.hidden');
var modalContainer = document.querySelector('.modal-container');
var button = document.querySelector('.btn');
button.onclick = function () {
    modalContainer.classList.remove('hidden');
};
var close = document.querySelector('.close');
close.onclick = function () {
    modalContainer.classList.add('hidden');
};
var layer = document.querySelector('.layer');
layer.onclick = function () {
    modalContainer.classList.add('hidden');
};
