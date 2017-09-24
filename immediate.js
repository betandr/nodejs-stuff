let bar;

function someAsyncApiCall(callback) {
  setImmediate(callback); // fires on the following iteration or 'tick' of the event loop
}

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

bar = 1;
