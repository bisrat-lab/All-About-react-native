
setTimeout(() => console.log('timeout'), 1000);
setImmediate(() => console.log('immediate'));
queueMicrotask(() => console.log('microtask'));
process.nextTick(() => console.log('nexttick'));   
 (() => new Promise((resolve) => resolve('promise')))()
.then((p) => console.log(p))