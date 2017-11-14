const test = require('tape');

test('A test', t => {
  var one = require('./return-one');
  t.equal(one(), 1);
  t.end();
})