"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "pyck",
			"path": "pyck/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/pyck.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"pyck": "pyck"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const pyck = require( "./pyck.js" );
//: @end-server

//: @client:
const pyck = require( "./pyck.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "pyck", ( ) => {

	describe( "`pyck( [ 1 ] )`", ( ) => {
		it( "should be equal to empty array", ( ) => {

			assert.deepEqual( pyck( [ 1 ] ), [ ] );

		} );
	} );

	describe( "`pyck( [ 1, 2, 3, 'hello' ], STRING )`", ( ) => {
		it( "should be equal to [ 'hello' ]", ( ) => {

			assert.deepEqual( pyck( [ 1, 2, 3, "hello" ], STRING ), [ "hello" ] );

		} );
	} );

	describe( "`pyck( [ true, 2, 3, 'hello' ], NUMBER, true )`", ( ) => {
		it( "should be equal to [ 2, 3 ]", ( ) => {

			assert.deepEqual( pyck( [ true, 2, 3, "hello" ], NUMBER, true ), [ 2, 3 ] );

		} );
	} );

	describe( "`pyck( [ { }, 1, 2, 3 ], OBJECT )`", ( ) => {
		it( "should be equal to [ { } ]", ( ) => {

			assert.deepEqual( pyck( [ { }, 1, 2, 3 ], OBJECT ), [ { } ] );

		} );
	} );

	describe( "`pyck( [ 1, 2, 3 ], [ 1 ] )`", ( ) => {
		it( "should be equal to [ 1 ]", ( ) => {

			assert.deepEqual( pyck( [ 1, 2, 3 ], [ 1 ] ), [ 1 ] );

		} );
	} );

	describe( "`pyck( [ 1, 2, 3, [ 4, 5, 6, 'a' ] ], NUMBER )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {

			assert.deepEqual( pyck( [ 1, 2, 3, [ 4, 5, 6, "a" ] ], NUMBER ), [ 1, 2, 3 ] );

		} );
	} );

	describe( "`pyck( [ Date, 1, 2, 3 ], Date )`", ( ) => {
		it( "should be equal to [ Date ]", ( ) => {

			assert.deepEqual( pyck( [ Date, 1, 2, 3 ], Date ), [ Date ] );

		} );
	} );

	describe( "`pyck( [ Array, 1, 2, 3, { } ], FUNCTION )`", ( ) => {
		it( "should be equal to [ Array ]", ( ) => {

			assert.deepEqual( pyck( [ Array, 1, 2, 3, { } ], FUNCTION ), [ Array ] );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "pyck", ( ) => {

	describe( "`pyck( [ 1 ] )`", ( ) => {
		it( "should be equal to empty array", ( ) => {

			assert.deepEqual( pyck( [ 1 ] ), [ ] );

		} );
	} );

	describe( "`pyck( [ 1, 2, 3, 'hello' ], STRING )`", ( ) => {
		it( "should be equal to [ 'hello' ]", ( ) => {

			assert.deepEqual( pyck( [ 1, 2, 3, "hello" ], STRING ), [ "hello" ] );

		} );
	} );

	describe( "`pyck( [ true, 2, 3, 'hello' ], NUMBER, true )`", ( ) => {
		it( "should be equal to [ 2, 3 ]", ( ) => {

			assert.deepEqual( pyck( [ true, 2, 3, "hello" ], NUMBER, true ), [ 2, 3 ] );

		} );
	} );

	describe( "`pyck( [ { }, 1, 2, 3 ], OBJECT )`", ( ) => {
		it( "should be equal to [ { } ]", ( ) => {

			assert.deepEqual( pyck( [ { }, 1, 2, 3 ], OBJECT ), [ { } ] );

		} );
	} );

	describe( "`pyck( [ 1, 2, 3 ], [ 1 ] )`", ( ) => {
		it( "should be equal to [ 1 ]", ( ) => {

			assert.deepEqual( pyck( [ 1, 2, 3 ], [ 1 ] ), [ 1 ] );

		} );
	} );

	describe( "`pyck( [ 1, 2, 3, [ 4, 5, 6, 'a' ] ], NUMBER )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {

			assert.deepEqual( pyck( [ 1, 2, 3, [ 4, 5, 6, "a" ] ], NUMBER ), [ 1, 2, 3 ] );

		} );
	} );

	describe( "`pyck( [ Date, 1, 2, 3 ], Date )`", ( ) => {
		it( "should be equal to [ Date ]", ( ) => {

			assert.deepEqual( pyck( [ Date, 1, 2, 3 ], Date ), [ Date ] );

		} );
	} );

	describe( "`pyck( [ Array, 1, 2, 3, { } ], FUNCTION )`", ( ) => {
		it( "should be equal to [ Array ]", ( ) => {

			assert.deepEqual( pyck( [ Array, 1, 2, 3, { } ], FUNCTION ), [ Array ] );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "pyck", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`pyck( [ 1 ] )`", ( ) => {
		it( "should be equal to empty array", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( pyck( [ 1 ] ) );
				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ ] );

		} );
	} );

	describe( "`pyck( [ 1, 2, 3, 'hello' ], STRING )`", ( ) => {
		it( "should be equal to [ 'hello' ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					return JSON.stringify( pyck( [ 1, 2, 3, "hello" ], STRING ) );

				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ "hello" ] );

		} );
	} );

	describe( "`pyck( [ true, 2, 3, 'hello' ], NUMBER, true )`", ( ) => {
		it( "should be equal to [ 2, 3 ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					return JSON.stringify( pyck( [ true, 2, 3, "hello" ], NUMBER, true ) );

				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ 2, 3 ] );

		} );
	} );

	describe( "`pyck( [ { }, 1, 2, 3 ], OBJECT )`", ( ) => {
		it( "should be equal to [ { } ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					return JSON.stringify( pyck( [ { }, 1, 2, 3 ], OBJECT ) );

				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ { } ] );

		} );
	} );

	describe( "`pyck( [ 1, 2, 3 ], [ 1 ] )`", ( ) => {
		it( "should be equal to [ 1 ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					return JSON.stringify( pyck( [ 1, 2, 3 ], [ 1 ] ) );

				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ 1 ] );

		} );
	} );

	describe( "`pyck( [ 1, 2, 3, [ 4, 5, 6, 'a' ] ], NUMBER )`", ( ) => {
		it( "should be equal to [ 1, 2, 3 ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					return JSON.stringify( pyck( [ 1, 2, 3, [ 4, 5, 6, "a" ] ], NUMBER ) );

				}

			).value;
			//: @end-ignore
			assert.deepEqual( JSON.parse( result ), [ 1, 2, 3 ] );

		} );
	} );

	describe( "`pyck( [ Date, 1, 2, 3 ], Date )`", ( ) => {
		it( "should be equal to [ Date ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					return pyck( [ Date, 1, 2, 3 ], Date )[ 0 ] == Date;

				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

	describe( "`pyck( [ Array, 1, 2, 3, { } ], FUNCTION )`", ( ) => {
		it( "should be equal to [ Array ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){

					return pyck( [ Array, 1, 2, 3, { } ], FUNCTION )[ 0 ] == Array;

				}

			).value;
			//: @end-ignore
			assert.equal( result, true );

		} );
	} );

} );

//: @end-bridge
