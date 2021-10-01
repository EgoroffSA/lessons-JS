'use strict'

// обязательно использовтаь use strict, чтобы нельзя было случайно создать переменную
// a = 10;
// let a = 20;
// console.log(a);

// скалярные типы
let letVar = 100;
var varVar = 'test';
const constVar = 'Static text';
// тип массив
const constArray = [1,2,3,4,5]; // регистр важен, принято писать в ситиле lowerCamelCase
let ConstArray = [6,7,8,9,10]; // одно и тоже слово но в разном регистре это разные переменные
// тип объект
let objectVar = {
    name : 'Олег',    
    status : 'Староста'
}

// letVar++;
// varVar = varVar + ' text';
// // constVar = 'Nev constatn'; // константу скалярную нельзя изменить
// // constArray = []; // константу объект или массив нальзя переопределить 
// ConstArray.push('сто'); // но изменить состав можно

// console.log('letVar = ', letVar);
// console.log('varVar = ', varVar);
// console.log('constVar = ', constVar);
// console.log('constArray = ', constArray);
// console.log('ConstArray = ', ConstArray, ' 1 456465');
// console.dir(objectVar);

// objectVar.age = 16;
// console.table(objectVar);

// let s = '';
// for (let i = 0; i < constArray.length; i++) {
//     s = s + ' - ' + constArray[i].toString();
// };

// console.log(s);
// // console.log(i);

// for (let i = 0; i < constArray.length; i++) {
//     let num = constArray[i] * 2;
//     s = s + ' -- ' + num.toString();
// };

// console.log(s);
// // console.log(i);

// let index = 0;
// while (index < constArray.length) {
//     console.log(constArray[index]);
//     index++;
// };

// console.log('constArray = ', constArray);

// constArray.forEach(item => console.log(item));
// let sortArray = constArray.filter(item => item % 2 === 0);
// console.log(sortArray);