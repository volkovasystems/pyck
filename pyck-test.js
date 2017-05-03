"use strict";

const assert = require( "assert" );
const pyck = require( "./pyck.js" );

assert.ok( pyck( [ 1, 2, 3 ], 2, true ) );

console.log( "ok" );
