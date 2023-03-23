'use strict'

function promiseTimer(value) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, value);
    })
}

function promiseTimerData(value, data) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, value, data);
    })
}

async function main() {
    console.log('Start')
    promiseTimer(1000);
    console.log('Прошла секунда');
    await promiseTimer(5000);
    console.log('Прошла вторая');
	try {
		await promiseTimer(3000);
		console.log('Прошло 3 секунды')    
	} catch (error) {
		console.error(error);
	}
}

main()

