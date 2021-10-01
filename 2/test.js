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

// задача -

function deleteOneMonth(mon) { 
    for (let i = 0; i < months.length; i++) {
        const el = months[i] 
        if(mon === el) {
            months.splice(i, 1);
            break;
        }        
    }    
}

for (let i = 0; i < birthdays.length; i++) deleteOneMonth(birthdays[i].birthMonth);

console.log(months);
// let filterA = birthdays.map(item => item.birthMonth);
// let res = months.filter(item => filterA.indexOf(item) < 0);
// console.log(filterA);
// let res = months.filter(item => birthdays.map(item => item.birthMonth).indexOf(item) < 0);
// console.table(res);