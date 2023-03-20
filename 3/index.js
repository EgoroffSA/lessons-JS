'use strict'
let Friends = [
    { name : "Арсений", family : "Цыганов", otchestvo : "Игоревич" },
    { name : "Влад", family : "Уминский", otchestvo : "Антонович" }, 
    { name : "Лиза", family : "Комарова", otchestvo : "Сергеевна" },
    { name : "Денис", family : "Климов", otchestvo : "Дмитреевич" }
];


const Classmates = [
    { name : "Анастасия", family : "Ильина", otchestvo : "Юрьевна" },
    { name : "Кирилл", family : "Попов", otchestvo : "Антонович" },
    { name : "Хрюн", family : "Моржов", otchestvo : "Свинович" },
    { name : "Степан", family : "Капуста", otchestvo : "Зайцевич" }
];

var SchoolClass = Friends.concat(Classmates);


    
    

function getRandomIndex (maxLenth, countElemets) {
    let result = [];
    if ( countElemets > maxLenth) {
        throw new SyntaxError("Данные некорректны");
    }                                    
    while (result.length < countElemets) {
        const el = Math.round(Math.random()*maxLenth);
        if (result.includes(el)  == false && el < maxLenth) result.push(el);
    }

    return result;
}




const randomIndex = getRandomIndex(SchoolClass.length, 5);

// for (let i = 0; i < randomIndex.length; i++) {
//     const element = randomIndex [i];
//     console.log(SchoolClass[element]);
// }

function isBoy (otchestvo) {    
    if (otchestvo.indexOf("вич") != -1)
    return true 
    else  return false

}


function boyOrGirl (data, malchic) {
    let children = [];
    for (let i = 0; i < data.length; i++) {
        const element = data [i];
        if (malchic && isBoy(element.otchestvo)) children.push(element);
        if (!malchic && !isBoy(element.otchestvo)) children.push(element);
    }
    return children;
}


const children = boyOrGirl(SchoolClass, false);
console.log(children);



