// When it is called, the callback provided to someAsyncApiCall() is called in
// the same phase of the event loop because someAsyncApiCall() doesn't actually
// do anything asynchronously. As a result, the callback tries to reference bar
// even though it may not have that variable in scope yet, because the script
// has not been able to run to completion.

let bar;

// this has an asynchronous signature, but calls callback synchronously
function someAsyncApiCall(callback) { callback(); }

// the callback is called before `someAsyncApiCall` completes.
someAsyncApiCall(() => {
  // since someAsyncApiCall has completed, bar hasn't been assigned any value
  console.log('bar', bar); // undefined
});

bar = 1;
