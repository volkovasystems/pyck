
const assert = require( "assert" );
const pyck = require( "./pyck.js" );

assert.deepEqual( pyck( [ 1, 2, 3 ], 2, true ), [ 2 ] );

assert.deepEqual( pyck( [ true, 2, 3, "hello" ], NUMBER, true ), [ 2, 3 ] );

console.log( "ok" );
