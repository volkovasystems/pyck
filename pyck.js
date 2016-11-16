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
	@end-module-documentation

	@include:
		{
			"doubt": "doubt",
			"harden": "harden",
			"protype": "protype",
			"raze": "raze",
			"zelf": "zelf"
		}
	@end-include
*/

const doubt = require( "doubt" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const protype = require( "protype" );
const raze = require( "raze" );
const zelf = require( "zelf" );

harden( "BOOLEAN", "boolean" );
harden( "FUNCTION", "function" );
harden( "NUMBER", "number" );
harden( "OBJECT", "object" );
harden( "STRING", "string" );
harden( "UNDEFINED", "undefined" );
harden( "SYMBOL", "symbol" );

const pyck = function pyck( list, condition ){
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
				]
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
					return protype( element, condition );

				}else if( conditionType.FUNCTION && ( /^[A-Z]/ ).test( condition.name ) ){
					return ( element instanceof condition );

				}else if( conditionType.FUNCTION ){
					return condition.bind( self )( element, index );

				}else{
					return false;
				}

			}catch( error ){
				throw new Error( `error testing condition at index, ${ index }, ${ error }` );
			}
		} );
};

module.exports = pyck;
