'use strict'

// классическое определение функции
function fn1(text) {
    console.log(`Show text : ${text}`);    
    return 156;
}

// почти классическое определение
const dateToString = function (moment) {    
    return  moment.getFullYear().toString() + '.' +
        ('0' + (moment.getMonth() + 1)).slice(-2) + '.' +
        ('0' + moment.getDate()).slice(-2) + ' ' +
        ('0' + moment.getHours()).slice(-2) + ':' +
        ('0' + moment.getMinutes()).slice(-2) + ':' +
        ('0' + moment.getSeconds()).slice(-2) + '.' +
        ('00' + moment.getMilliseconds()).slice(-3);
}

// определение стредлчной функции как переменной
const fn2 = (text) => {
    let moment = new Date();
    console.log(`Show text and moment : ${text} - ${dateToString(moment)}`);
}

// fn1('Hello');
// fn2('Hello world');

// // функцию можно передать через другую переменную
// const fn3 = fn1;

// fn3('Copy fn1');
// console.log(fn3);


// // функция может/должна возвращать результат - ключевое слово return
// function increment(a , b) {
//     return a + b;
// }

// // хороший тон - проверять что агументы функции заданы
// function increment1(a , b) {
//     if(!a || !b) throw new Error('Не заданы аргументы');
//     return a + b;
// }

// // часть аргументов можно присвоить значения поумолчанию, такие парметры должны быть все в конце ф-и
// function increment2(a , b = 10) {
//     return a + b;
// }

// fn1(increment(1,2));
// fn1(increment(1));
// // fn1(increment1(1));
// fn1(increment2(4));


// асинхронность это наше все - большинство ф-и в компонентах требуют передать в качестве 
// параметров ф-ю обратного вызова
function onTimer() {
    fn1('Таймер сработал');
}

console.log('setTimeout');
setTimeout(onTimer, 1000);

// если надо сделать несколько действий последовательно через ф-и обратног вызова, 
// то получается нечитаемы код-лапша
function onTimerNext() {
    fn1('Вот таймер сработал запускаем новый');
    setTimeout(onTimer, 2000);
}
console.log('setTimeout2');
setTimeout(onTimerNext, 1500);

// частично можно решить проблему лапши через стрелочные ф-и т.е. определние новой ф-и сразу в теле вызова
setTimeout(() => {
    fn1('Сработал тймер со стрелочной функцией');
}, 5000);


// для бизнеслогики у нас есть promise(resolve, reject)
const ozjidanie = (timeout) => new Promise((resolve, reject) => setTimeout(resolve, timeout*1000));

async function testAsync() {
    fn2('Start1');
    await ozjidanie(5);
    fn2('Work 1');
    await ozjidanie(5);
    fn2('Work 2');
}

testAsync();