'use strict'

const birthdays = [
    { name : 'Мама', birthMonth : 'Август' },
    { name : 'Папа', birthMonth : 'Июнь' },
    { name : 'Олег', birthMonth : 'Июль' },
    { name : 'Бабушка', birthMonth : 'Апрель' },
    { name : 'Дедушка', birthMonth : 'Январь' }
];

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Ноябрь',
    'Декабрь',
];

console.clear();

// console.table(birthdays);
// console.table(months);

// let a = months.slice(0, 3);
// let a = months.splice(0, 3);
// console.table(a);

// for(let i = 0; i < months.length; i++) {
//     if(months[i] === 'Май') {
//         months.splice(i, 1);
//         break;
//     }
// }

// console.table(months);

// for (let i = 0; i < birthdays.length; i++ ) {
//     const mon  = birthdays[i].birthMonth 
//     console.log(mon);
//     for (let j = 0; j < months.length; j++) {
//         const el = months[j] 
//         if(mon === el) {
//             months.splice(j, 1);
//             break;
//         }        
//     }    
// }
// console.log(months);

console.time('execute');
// let filterA = birthdays.map(item => item.birthMonth);
// let res = months.filter(item => filterA.indexOf(item) < 0);
// console.log(filterA);

let res = months.filter(item => birthdays.map(item => item.birthMonth).indexOf(item) < 0);
console.timeEnd('execute');

console.table(res);