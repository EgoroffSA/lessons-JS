'use strict'

function promiseTimer(value) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, value);
    })
}

promiseTimer(1000)
.then(() => console.log('Истекла секунда раз'));

promiseTimer(1000)
.then(() => { 
    console.log('Истекла секунда два');
    promiseTimer(1000)
    .then(() => console.log('Еще секунда'))
});

function promiseTimerData(value, data) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, value, data);
    })
}

promiseTimerData(5000, 'Five seconds')
.then((data) => console.log(data));

Promise.all([
    promiseTimerData(3000, 'Promise 1'),
    promiseTimerData(2500, 'Promise 2'),
    promiseTimerData(4000, 'Promise 3'),
])
.then(values => console.log(values))
.catch(error => console.log(error));