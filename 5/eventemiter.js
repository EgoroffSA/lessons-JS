'use strict'

const EventEmitter = require('events');

const emitter = new EventEmitter();

let counter = 10;

let interval = setInterval(() =>{
    emitter.emit('event', [ counter, new Date()]);
    counter--;
    if (counter < 0) clearInterval(interval);
}, 1000);

emitter.on('event',(data) => {
    console.log(data);
})

