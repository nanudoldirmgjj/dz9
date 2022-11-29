/*
Задание 1

Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
*/
// #1 вариант 1 
const form1 = document.getElementById('form1');
const ul = form1.querySelector('ul');
form1.onkeydown = (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = event.key;
    ul.appendChild(li);
}

// #2 вариант 2
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');
// input.onkeydown = (event) => {
//     let li = document.createElement('li');    
//     li.innerText = event.key;
//     ul.appendChild(li);    
// }

/*
Задание 2

Вставить в html теги input и div (просто предусмотреть в разметке).

Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value
*/


const inp1 = document.getElementById('inp1');
inp1.onkeyup = () => console.log(inp1.value);

/*
Задание 3

Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
*/


const form3 = document.getElementById('form3');
const i3 = document.getElementById('inp3');
// const s3 = document.getElementById('sub3');
const u3 = document.getElementById('ul3');
form3.addEventListener('submit', (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = i3.value;
    u3.appendChild(li);
    i3.value = '';
})

/*

Задание 4

Калькулятор. 

Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.

1) решить с помощью if

2) решить с помощью evel (https://developer.mozilla.org/...)
*/

const f4 = document.getElementById('f4');
const i41 = document.getElementById('41st');
const s4 = document.getElementById('s4');
const i42 = document.getElementById('42d');
const d4 = document.getElementById('d4');

// 1
f4.addEventListener('submit', (event) => {
    event.preventDefault();
    let result; 
    if (s4.value == '+') {
         result = Number(i41.value) + Number(i42.value);
    }
    if (s4.value == '-') {
         result = i41.value - i42.value;
    }
    if (s4.value == '*') {
         result = i41.value * i42.value;
    }
    if(s4.value == '/') {
         result = i41.value / i42.value;         
    } 
    d4.innerText = result;
})
// 2
f4.addEventListener('submit', (event) => {
    event.preventDefault();    
   d4.innerText = eval(i41.value + s4.value + i42.value)

})


/*
Задание 5

Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
*/
const but = document.getElementById('button');
but.style.width='200px';
but.style.height='200px';
but.style.marginLeft='200px';



but.onmouseenter = () => {
  let r =  Math.floor(Math.random() * (256));
  let g = Math.floor(Math.random() * (256));
  let b = Math.floor(Math.random() * (256));
  let back = `rgb(${r}, ${g}, ${b})`;
  console.log(back);
   but.style.backgroundColor=back;
}

but.onmouseleave = () => {
    let g = Math.floor(Math.random() * 360 + (-180));
    let rotate = `rotate(${g}deg)`;
    but.style.transform = rotate;
}

