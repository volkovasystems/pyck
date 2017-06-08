
const assert = require( "assert" );
const pyck = require( "./pyck.js" );

assert.deepEqual( pyck( [ 1 ] ), [ ], "should return empty array" );

assert.deepEqual( pyck( [ 1 ], undefined ), [ ], "should return empty array" );

assert.deepEqual( pyck( [ NaN, 1 ], NaN ), [ ], "should return empty array" );

assert.deepEqual( pyck( [ { "hello": "world", "name": "simple" } ], { "hello": "world" } ), [ ], "should return empty array" );

assert.deepEqual( pyck( [ null, true ], null ), [ null ], "should be deeply equal" );

assert.deepEqual( pyck( [ undefined, true ], undefined ), [ undefined ], "should be deeply equal" );

assert.deepEqual( pyck( [ 1, 2, 3, "hello" ], STRING ), [ "hello" ], "should be deeply equal" );

assert.deepEqual( pyck( [ true, 2, 3, "hello" ], NUMBER, true ), [ 2, 3 ], "should be deeply equal" );

assert.deepEqual( pyck( [ { }, 1, 2, 3 ], OBJECT ), [ { } ], "should be deeply equal" );

assert.deepEqual( pyck( [ 1, 2, 3 ], [ 1 ] ), [ 1 ], "should be deeply equal" );

assert.deepEqual( pyck( [ 1, 2, 3 ], 2 ), [ 2 ], "should be deeply equal" );

assert.deepEqual( pyck( [ 1, 2, 3, [ 4, 5, 6, "a" ] ], NUMBER ), [ 1, 2, 3 ], "should be deeply equal" );

assert.deepEqual( pyck( [ Date, 1, 2, 3 ], Date ), [ Date ], "should be deeply equal" );

assert.deepEqual( pyck( [ Date, Object, Array ], Object ), [ Date, Object, Array ], "should be deeply equal" );

assert.deepEqual( pyck( [ Date, Object, Array ], FUNCTION ), [ Date, Object, Array ], "should be deeply equal" );

assert.deepEqual( pyck( [ Array, 1, 2, 3, { } ], OBJECT ), [ { } ], "should be deeply equal" );

assert.deepEqual( pyck( [ Array, 1, 2, 3, { } ], FUNCTION ), [ Array ], "should be deeply equal" );

console.log( "ok" );
