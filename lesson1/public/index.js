var input = document.querySelector('input');

var btn = document.querySelectorAll('button');

for(var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {

        input.value += this.innerText;

    };
};
