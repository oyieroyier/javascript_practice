function wakeUp(callback) {
    callback();
}
function brushTeeth(callback) {
    console.log('I am now awake');
    callback();
}
function shower(callback) {
    console.log('I have now showered');
    callback();
}
function takeBreakfast(callback) {
    console.log('I have now taken breakfast');
    callback();
}
function leaveHouse(callback) {
    console.log('I am now leaving the house.');
    callback();
}
// Callback Hell explained.
wakeUp(function () {
    brushTeeth(function () {
        shower(function () {
            takeBreakfast(function () {
                leaveHouse(function () { });
            });
        });
    });
});
function getWeather() {
    return new Promise(function (resolve, reject) {
        resolve("Sunny");
    });
}
var promise = getWeather();
promise.then(function (data) {
    console.log(data);
}, function (data) {
    console.log("Second ");
});
console.log(promise);
