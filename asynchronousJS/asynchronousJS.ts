function wakeUp(callback: () => void) {
	callback();
}

function brushTeeth(callback: () => void) {
	console.log('I am now awake');

	callback();
}

function shower(callback: () => void) {
	console.log('I have now showered');
	callback();
}
function takeBreakfast(callback: () => void) {
	console.log('I have now taken breakfast');

	callback();
}

function leaveHouse(callback: () => void) {
	console.log('I am now leaving the house.');

	callback();
}

// Callback Hell explained.
wakeUp(() => {
	brushTeeth(() => {
		shower(() => {
			takeBreakfast(() => {
				leaveHouse(() => {});
			});
		});
	});
});

const count = true; // This is just a variable to keep track of whether we are done or not

let countValue = new Promise((resolve, reject) => {
	if (count) {
		resolve('There is a count value');
	} else {
		reject('There is no count value');
	}
});

countValue;

let promise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('Done!'), 2000);
});

console.log(promise.then((success) => console.log(success)));
