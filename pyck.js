/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
	@end-module-license

	@module-configuration:
		{
			"package": "pyck",
			"path": "pyck/pyck.js",
			"file": "pyck.js",
			"module": "pyck",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/pyck.git",
			"test": "pyck-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Pick elements based on condition.

		Conditions may be type, function, class or actual value to be compared.

		Setting state will further check if the element is non-null, non-undefined,
			non-empty string, object or array, not Infinity and NaN if state is true otherwise
			it will check for falsy values.

		If condition is a function it should return a boolean result else,
			this will throw an error.
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"falze": "falze",
			"falzy": "falzy",
			"harden": "harden",
			"protype": "protype",
			"raze": "raze",
			"truu": "truu",
			"zelf": "zelf"
		}
	@end-include
*/

const doubt = require( "doubt" );
const falze = require( "falze" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const protype = require( "protype" );
const raze = require( "raze" );
const truu = require( "truu" );
const zelf = require( "zelf" );

harden( "BOOLEAN", "boolean" );
harden( "FUNCTION", "function" );
harden( "NUMBER", "number" );
harden( "OBJECT", "object" );
harden( "STRING", "string" );
harden( "UNDEFINED", "undefined" );
harden( "SYMBOL", "symbol" );

const pyck = function pyck( list, condition, state ){
	/*;
		@meta-configuration:
			{
				"list:required": [
					"Arguments",
					"[*]"
				],
				"condition:required": [
					"string",
					"function",
					BOOLEAN,
					FUNCTION,
					NUMBER,
					OBJECT,
					STRING,
					UNDEFINED,
					SYMBOL,
					"[string, function]"
				],
				"state": "boolean"
			}
		@end-meta-configuration
	*/

	if( doubt( condition ).ARRAY ){
		return condition.reduce( function onEachCondition( accumulant, condition ){
			return accumulant.concat( pyck( list, condition ) );
		}, [ ] );

	}else if( falzy( condition ) ){
		throw new Error( "invalid condition" );
	}

	let self = zelf( this );

	let conditionType = protype( condition );

	return raze( list )
		.filter( function onEachElement( element, index ){
			try{
				if( element === condition ){
					return true;

				}else if( conditionType.STRING &&
					( condition == BOOLEAN ||
						condition == FUNCTION ||
						condition == NUMBER ||
						condition == OBJECT ||
						condition == STRING ||
						condition == UNDEFINED ||
						condition == SYMBOL ) )
				{
					let result = protype( element, condition );

					if( state === true && truu( element ) && result ){
						return true;

					}else if( state === true ){
						return false;

					}else if( state === false && falze( element ) ){
						return true;

					}else if( state === false ){
						return false;

					}else{
						return result;
					}

				}else if( conditionType.FUNCTION && ( /^[A-Z]/ ).test( condition.name ) ){
					return ( element instanceof condition );

				}else if( conditionType.FUNCTION ){
					let result = condition.bind( self )( element, index );

					if( !protype( result, BOOLEAN ) ){
						throw new Error( `invalid condition result, ${ result }` );

					}else{
						return result;
					}
				}

			}catch( error ){
				throw new Error( `error testing condition, ${ element }, ${ index }, ${ error }` );
			}
		} );
};

module.exports = pyck;
