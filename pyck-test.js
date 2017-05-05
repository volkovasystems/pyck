"use strict";

const assert = require( "assert" );
const pyck = require( "./pyck.js" );

assert.deepEqual( pyck( [ 1, 2, 3 ], 2, true ), [ 2 ] );

console.log( "ok" );
