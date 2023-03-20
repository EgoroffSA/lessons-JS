'use strict'

const fs = require('fs');

// функции обратного вызова
function callbackFn(err, res) {
    if (err) console.error('Ошибка', err)
    else console.log(res);
}

function main(data, callback) {
    data = data + ' запуск ф-и обратного вызова';
    callback(null, data);
}

// main('Тест 1', callbackFn);



// main('Тест 2', (err, res) => {
//     if (err) console.error('Ошибка', err)
//     else console.log(res);
// })
// console.log(1);
// setTimeout(callbackFn, 1000, null, 'Вызов из таймера');
// console.log(2);
// setTimeout(() => {
//    console.log('Таймер №2') 
// }, 2000);

// fs.readFile('./file.tx', (err, data) => {
//     if (err) console.error('Ошибка', err)
//     else 
//     {console.log('Пупс',data);
//     console.log('>> 1', data.toString());}
// })

// const file = fs.readFileSync('./file.txt');
// console.log('>> 2', file.toString());

// вызвать подряд таймер 1 сек, 5 сек потом 3 сек !!!
setTimeout(() => { 
    console.log('Таймер 1', new Date());
    setTimeout(() => {
        console.log('Таймер 2', new Date());
        setTimeout(() => {
            console.log('Таймер 3', new Date());
        }, 3000);
    }, 5000);
}, 1000);

