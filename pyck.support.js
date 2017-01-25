"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "pyck",
			"path": "pyck/pyck.js",
			"file": "pyck.js",
			"module": "pyck",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
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
			"clazof": "clazof",
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

var clazof = require("clazof");
var doubt = require("doubt");
var falze = require("falze");
var falzy = require("falzy");
var harden = require("harden");
var protype = require("protype");
var raze = require("raze");
var truu = require("truu");
var zelf = require("zelf");

harden("BOOLEAN", "boolean");
harden("FUNCTION", "function");
harden("NUMBER", "number");
harden("OBJECT", "object");
harden("STRING", "string");
harden("UNDEFINED", "undefined");
harden("SYMBOL", "symbol");

var pyck = function pyck(list, condition, state) {
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

	if (doubt(condition, ARRAY)) {
		return condition.reduce(function onEachCondition(accumulant, condition) {
			return accumulant.concat(pyck(list, condition));
		}, []);
	} else if (falzy(condition)) {
		throw new Error("invalid condition");
	}

	var self = zelf(this);

	var conditionType = protype(condition);

	return raze(list).filter(function onEachElement(element, index) {
		try {
			if (element === condition) {
				return true;
			} else if (conditionType.STRING && (condition == BOOLEAN || condition == FUNCTION || condition == NUMBER || condition == OBJECT || condition == STRING || condition == UNDEFINED || condition == SYMBOL)) {
				var result = protype(element, condition);

				if (state === true && truu(element) && result) {
					return true;
				} else if (state === true) {
					return false;
				} else if (state === false && falze(element)) {
					return true;
				} else if (state === false) {
					return false;
				} else {
					return result;
				}
			} else if (conditionType.FUNCTION && /^[A-Z]/.test(condition.name)) {
				return clazof(element, condition);
			} else if (conditionType.FUNCTION) {
				var _result = condition.bind(self)(element, index);

				if (!protype(_result, BOOLEAN)) {
					throw new Error("invalid condition result, " + _result);
				} else {
					return _result;
				}
			}
		} catch (error) {
			throw new Error("error testing condition, " + element + ", " + index + ", " + error);
		}
	});
};

module.exports = pyck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB5Y2suanMiXSwibmFtZXMiOlsiY2xhem9mIiwicmVxdWlyZSIsImRvdWJ0IiwiZmFsemUiLCJmYWx6eSIsImhhcmRlbiIsInByb3R5cGUiLCJyYXplIiwidHJ1dSIsInplbGYiLCJweWNrIiwibGlzdCIsImNvbmRpdGlvbiIsInN0YXRlIiwiQVJSQVkiLCJyZWR1Y2UiLCJvbkVhY2hDb25kaXRpb24iLCJhY2N1bXVsYW50IiwiY29uY2F0IiwiRXJyb3IiLCJzZWxmIiwiY29uZGl0aW9uVHlwZSIsImZpbHRlciIsIm9uRWFjaEVsZW1lbnQiLCJlbGVtZW50IiwiaW5kZXgiLCJTVFJJTkciLCJCT09MRUFOIiwiRlVOQ1RJT04iLCJOVU1CRVIiLCJPQkpFQ1QiLCJVTkRFRklORUQiLCJTWU1CT0wiLCJyZXN1bHQiLCJ0ZXN0IiwibmFtZSIsImJpbmQiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdFQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssVUFBVUwsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTyxPQUFPUCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1RLE9BQU9SLFFBQVMsTUFBVCxDQUFiOztBQUVBSSxPQUFRLFNBQVIsRUFBbUIsU0FBbkI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFFBQVIs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dCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicHlja1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwicHljay9weWNrLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJweWNrLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInB5Y2tcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9weWNrLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwicHljay10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFBpY2sgZWxlbWVudHMgYmFzZWQgb24gY29uZGl0aW9uLlxuXG5cdFx0Q29uZGl0aW9ucyBtYXkgYmUgdHlwZSwgZnVuY3Rpb24sIGNsYXNzIG9yIGFjdHVhbCB2YWx1ZSB0byBiZSBjb21wYXJlZC5cblxuXHRcdFNldHRpbmcgc3RhdGUgd2lsbCBmdXJ0aGVyIGNoZWNrIGlmIHRoZSBlbGVtZW50IGlzIG5vbi1udWxsLCBub24tdW5kZWZpbmVkLFxuXHRcdFx0bm9uLWVtcHR5IHN0cmluZywgb2JqZWN0IG9yIGFycmF5LCBub3QgSW5maW5pdHkgYW5kIE5hTiBpZiBzdGF0ZSBpcyB0cnVlIG90aGVyd2lzZVxuXHRcdFx0aXQgd2lsbCBjaGVjayBmb3IgZmFsc3kgdmFsdWVzLlxuXG5cdFx0SWYgY29uZGl0aW9uIGlzIGEgZnVuY3Rpb24gaXQgc2hvdWxkIHJldHVybiBhIGJvb2xlYW4gcmVzdWx0IGVsc2UsXG5cdFx0XHR0aGlzIHdpbGwgdGhyb3cgYW4gZXJyb3IuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcImZhbHplXCI6IFwiZmFsemVcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwidHJ1dVwiOiBcInRydXVcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBjbGF6b2YgPSByZXF1aXJlKCBcImNsYXpvZlwiICk7XG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgZmFsemUgPSByZXF1aXJlKCBcImZhbHplXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3QgdHJ1dSA9IHJlcXVpcmUoIFwidHJ1dVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuaGFyZGVuKCBcIkJPT0xFQU5cIiwgXCJib29sZWFuXCIgKTtcbmhhcmRlbiggXCJGVU5DVElPTlwiLCBcImZ1bmN0aW9uXCIgKTtcbmhhcmRlbiggXCJOVU1CRVJcIiwgXCJudW1iZXJcIiApO1xuaGFyZGVuKCBcIk9CSkVDVFwiLCBcIm9iamVjdFwiICk7XG5oYXJkZW4oIFwiU1RSSU5HXCIsIFwic3RyaW5nXCIgKTtcbmhhcmRlbiggXCJVTkRFRklORURcIiwgXCJ1bmRlZmluZWRcIiApO1xuaGFyZGVuKCBcIlNZTUJPTFwiLCBcInN5bWJvbFwiICk7XG5cbmNvbnN0IHB5Y2sgPSBmdW5jdGlvbiBweWNrKCBsaXN0LCBjb25kaXRpb24sIHN0YXRlICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwibGlzdDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJBcmd1bWVudHNcIixcblx0XHRcdFx0XHRcIlsqXVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRCT09MRUFOLFxuXHRcdFx0XHRcdEZVTkNUSU9OLFxuXHRcdFx0XHRcdE5VTUJFUixcblx0XHRcdFx0XHRPQkpFQ1QsXG5cdFx0XHRcdFx0U1RSSU5HLFxuXHRcdFx0XHRcdFVOREVGSU5FRCxcblx0XHRcdFx0XHRTWU1CT0wsXG5cdFx0XHRcdFx0XCJbc3RyaW5nLCBmdW5jdGlvbl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcInN0YXRlXCI6IFwiYm9vbGVhblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZG91YnQoIGNvbmRpdGlvbiwgQVJSQVkgKSApe1xuXHRcdHJldHVybiBjb25kaXRpb24ucmVkdWNlKCBmdW5jdGlvbiBvbkVhY2hDb25kaXRpb24oIGFjY3VtdWxhbnQsIGNvbmRpdGlvbiApe1xuXHRcdFx0cmV0dXJuIGFjY3VtdWxhbnQuY29uY2F0KCBweWNrKCBsaXN0LCBjb25kaXRpb24gKSApO1xuXHRcdH0sIFsgXSApO1xuXG5cdH1lbHNlIGlmKCBmYWx6eSggY29uZGl0aW9uICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjb25kaXRpb25cIiApO1xuXHR9XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IGNvbmRpdGlvblR5cGUgPSBwcm90eXBlKCBjb25kaXRpb24gKTtcblxuXHRyZXR1cm4gcmF6ZSggbGlzdCApXG5cdFx0LmZpbHRlciggZnVuY3Rpb24gb25FYWNoRWxlbWVudCggZWxlbWVudCwgaW5kZXggKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0aWYoIGVsZW1lbnQgPT09IGNvbmRpdGlvbiApe1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdH1lbHNlIGlmKCBjb25kaXRpb25UeXBlLlNUUklORyAmJlxuXHRcdFx0XHRcdCggY29uZGl0aW9uID09IEJPT0xFQU4gfHxcblx0XHRcdFx0XHRcdGNvbmRpdGlvbiA9PSBGVU5DVElPTiB8fFxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uID09IE5VTUJFUiB8fFxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uID09IE9CSkVDVCB8fFxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uID09IFNUUklORyB8fFxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uID09IFVOREVGSU5FRCB8fFxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uID09IFNZTUJPTCApIClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCBlbGVtZW50LCBjb25kaXRpb24gKTtcblxuXHRcdFx0XHRcdGlmKCBzdGF0ZSA9PT0gdHJ1ZSAmJiB0cnV1KCBlbGVtZW50ICkgJiYgcmVzdWx0ICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHRcdH1lbHNlIGlmKCBzdGF0ZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRcdFx0fWVsc2UgaWYoIHN0YXRlID09PSBmYWxzZSAmJiBmYWx6ZSggZWxlbWVudCApICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHRcdH1lbHNlIGlmKCBzdGF0ZSA9PT0gZmFsc2UgKXtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fWVsc2UgaWYoIGNvbmRpdGlvblR5cGUuRlVOQ1RJT04gJiYgKCAvXltBLVpdLyApLnRlc3QoIGNvbmRpdGlvbi5uYW1lICkgKXtcblx0XHRcdFx0XHRyZXR1cm4gY2xhem9mKCBlbGVtZW50LCBjb25kaXRpb24gKTtcblxuXHRcdFx0XHR9ZWxzZSBpZiggY29uZGl0aW9uVHlwZS5GVU5DVElPTiApe1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBjb25kaXRpb24uYmluZCggc2VsZiApKCBlbGVtZW50LCBpbmRleCApO1xuXG5cdFx0XHRcdFx0aWYoICFwcm90eXBlKCByZXN1bHQsIEJPT0xFQU4gKSApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgaW52YWxpZCBjb25kaXRpb24gcmVzdWx0LCAkeyByZXN1bHQgfWAgKTtcblxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBlcnJvciB0ZXN0aW5nIGNvbmRpdGlvbiwgJHsgZWxlbWVudCB9LCAkeyBpbmRleCB9LCAkeyBlcnJvciB9YCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHljaztcbiJdfQ==
