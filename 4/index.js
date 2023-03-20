'use strict'

const utils = require('./lib/utils');
const fs = require('fs');

let s = fs.readFileSync('./class.json');
var SchoolClass = JSON.parse(s);

//fs.writeFileSync('./class.json', JSON.stringify(SchoolClass, null, 4));
    
let a = utils.randomMassiv(SchoolClass,  5);
console.log(a);

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



