
// From 'You Don't Know JS"
// a beneficial side effect of wrapping Promise.resolve(..) around any function's return value
// (thenable or not) is that it's an easy way to normalize that function call into a well-behaving
// async task. If foo(42) returns an immediate value sometimes, or a Promise other times,
// Promise.resolve( foo(42) ) makes sure it's always a Promise result.
// And avoiding Zalgo (race conditions) makes for much better code.
// don't just do this:

// Promises are a pattern that augments callbacks with trustable semantics, so that the
// behavior is more reason-able and more reliable. By uninverting the inversion of control of
// callbacks, we place the control with a trustable system (Promises) that was designed specifically
// to bring sanity to our async.


// CHAIN FLOW
// Promises are more than 'this-than-that' flow. That is a building block os promises. However, we
// can string multiple promises together to represent a sequence of async steps

// This is achieved by using then() which creates and returns a new promise that we can chain with
// and by whatever value you return from the then() call's fulfillment callback (the first parameter)
// is automatically set as the fulfillment of the chained Promise (from the first point).
var p = Promise.resolve(21);
p
.then(function(v) {
  return v * 2;
})
.then(function(newVal){
  console.log(newVal);
});
