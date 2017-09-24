// By placing the callback in a process.nextTick(), the script still has the
// ability to run to completion, allowing all the variables, functions, etc.,
// to be initialized prior to the callback being called. It also has the
// advantage of not allowing the event loop to continue.

let bar;

function someAsyncApiCall(callback) {
  process.nextTick(callback); // fires immediately on the same phase
}

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

bar = 1;
