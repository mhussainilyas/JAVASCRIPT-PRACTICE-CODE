let ts = 5405000;
// console.log(ts / 1000 / 60);

// let minutes = Math.floor(ts / 1000 / 60);
// or
let minutes = Math.floor(ts / (1000 * 60));

let seconds = (ts % (1000 * 60)) / 1000;
console.log(`${minutes} min : ${seconds} sec`);
