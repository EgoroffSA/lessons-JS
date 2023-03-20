'use strict';

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




function randomMassiv (array, colichestvo)  {  
    let randomIndex = getRandomIndex(array.length, colichestvo);
    let result = [];                                 
    for (let i = 0; i < randomIndex.length; i++)    {
        const element = randomIndex [i];
        result.push(array[element]);
        
    }
    return result;
}







module.exports = {
    getRandomIndex,
    randomMassiv    
}