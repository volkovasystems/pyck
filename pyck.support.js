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

	if (doubt(condition).ARRAY) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB5Y2suanMiXSwibmFtZXMiOlsiY2xhem9mIiwicmVxdWlyZSIsImRvdWJ0IiwiZmFsemUiLCJmYWx6eSIsImhhcmRlbiIsInByb3R5cGUiLCJyYXplIiwidHJ1dSIsInplbGYiLCJweWNrIiwibGlzdCIsImNvbmRpdGlvbiIsInN0YXRlIiwiQVJSQVkiLCJyZWR1Y2UiLCJvbkVhY2hDb25kaXRpb24iLCJhY2N1bXVsYW50IiwiY29uY2F0IiwiRXJyb3IiLCJzZWxmIiwiY29uZGl0aW9uVHlwZSIsImZpbHRlciIsIm9uRWFjaEVsZW1lbnQiLCJlbGVtZW50IiwiaW5kZXgiLCJTVFJJTkciLCJCT09MRUFOIiwiRlVOQ1RJT04iLCJOVU1CRVIiLCJPQkpFQ1QiLCJVTkRFRklORUQiLCJTWU1CT0wiLCJyZXN1bHQiLCJ0ZXN0IiwibmFtZSIsImJpbmQiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdFQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssVUFBVUwsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTyxPQUFPUCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1RLE9BQU9SLFFBQVMsTUFBVCxDQUFiOztBQUVBSSxPQUFRLFNBQVIsRUFBbUIsU0FBbkI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNBQSxPQUFRLFFBQVIs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Lyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInB5Y2tcIixcblx0XHRcdFwicGF0aFwiOiBcInB5Y2svcHljay5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwicHljay5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJweWNrXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcHljay5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInB5Y2stdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRQaWNrIGVsZW1lbnRzIGJhc2VkIG9uIGNvbmRpdGlvbi5cblxuXHRcdENvbmRpdGlvbnMgbWF5IGJlIHR5cGUsIGZ1bmN0aW9uLCBjbGFzcyBvciBhY3R1YWwgdmFsdWUgdG8gYmUgY29tcGFyZWQuXG5cblx0XHRTZXR0aW5nIHN0YXRlIHdpbGwgZnVydGhlciBjaGVjayBpZiB0aGUgZWxlbWVudCBpcyBub24tbnVsbCwgbm9uLXVuZGVmaW5lZCxcblx0XHRcdG5vbi1lbXB0eSBzdHJpbmcsIG9iamVjdCBvciBhcnJheSwgbm90IEluZmluaXR5IGFuZCBOYU4gaWYgc3RhdGUgaXMgdHJ1ZSBvdGhlcndpc2Vcblx0XHRcdGl0IHdpbGwgY2hlY2sgZm9yIGZhbHN5IHZhbHVlcy5cblxuXHRcdElmIGNvbmRpdGlvbiBpcyBhIGZ1bmN0aW9uIGl0IHNob3VsZCByZXR1cm4gYSBib29sZWFuIHJlc3VsdCBlbHNlLFxuXHRcdFx0dGhpcyB3aWxsIHRocm93IGFuIGVycm9yLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJmYWx6ZVwiOiBcImZhbHplXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInRydXVcIjogXCJ0cnV1XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHRydXUgPSByZXF1aXJlKCBcInRydXVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmhhcmRlbiggXCJCT09MRUFOXCIsIFwiYm9vbGVhblwiICk7XG5oYXJkZW4oIFwiRlVOQ1RJT05cIiwgXCJmdW5jdGlvblwiICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIFwibnVtYmVyXCIgKTtcbmhhcmRlbiggXCJPQkpFQ1RcIiwgXCJvYmplY3RcIiApO1xuaGFyZGVuKCBcIlNUUklOR1wiLCBcInN0cmluZ1wiICk7XG5oYXJkZW4oIFwiVU5ERUZJTkVEXCIsIFwidW5kZWZpbmVkXCIgKTtcbmhhcmRlbiggXCJTWU1CT0xcIiwgXCJzeW1ib2xcIiApO1xuXG5jb25zdCBweWNrID0gZnVuY3Rpb24gcHljayggbGlzdCwgY29uZGl0aW9uLCBzdGF0ZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiQXJndW1lbnRzXCIsXG5cdFx0XHRcdFx0XCJbKl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImNvbmRpdGlvbjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0Qk9PTEVBTixcblx0XHRcdFx0XHRGVU5DVElPTixcblx0XHRcdFx0XHROVU1CRVIsXG5cdFx0XHRcdFx0T0JKRUNULFxuXHRcdFx0XHRcdFNUUklORyxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiW3N0cmluZywgZnVuY3Rpb25dXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJzdGF0ZVwiOiBcImJvb2xlYW5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGRvdWJ0KCBjb25kaXRpb24gKS5BUlJBWSApe1xuXHRcdHJldHVybiBjb25kaXRpb24ucmVkdWNlKCBmdW5jdGlvbiBvbkVhY2hDb25kaXRpb24oIGFjY3VtdWxhbnQsIGNvbmRpdGlvbiApe1xuXHRcdFx0cmV0dXJuIGFjY3VtdWxhbnQuY29uY2F0KCBweWNrKCBsaXN0LCBjb25kaXRpb24gKSApO1xuXHRcdH0sIFsgXSApO1xuXG5cdH1lbHNlIGlmKCBmYWx6eSggY29uZGl0aW9uICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjb25kaXRpb25cIiApO1xuXHR9XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IGNvbmRpdGlvblR5cGUgPSBwcm90eXBlKCBjb25kaXRpb24gKTtcblxuXHRyZXR1cm4gcmF6ZSggbGlzdCApXG5cdFx0LmZpbHRlciggZnVuY3Rpb24gb25FYWNoRWxlbWVudCggZWxlbWVudCwgaW5kZXggKXtcblx0XHRcdHRyeXtcblx0XHRcdFx0aWYoIGVsZW1lbnQgPT09IGNvbmRpdGlvbiApe1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdH1lbHNlIGlmKCBjb25kaXRpb25UeXBlLlNUUklORyAmJlxuXHRcdFx0XHRcdCggY29uZGl0aW9uID09IEJPT0xFQU4gfHxcblx0XHRcdFx0XHRcdGNvbmRpdGlvbiA9PSBGVU5DVElPTiB8fFxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uID09IE5VTUJFUiB8fFxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uID09IE9CSkVDVCB8fFxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uID09IFNUUklORyB8fFxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uID09IFVOREVGSU5FRCB8fFxuXHRcdFx0XHRcdFx0Y29uZGl0aW9uID09IFNZTUJPTCApIClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBwcm90eXBlKCBlbGVtZW50LCBjb25kaXRpb24gKTtcblxuXHRcdFx0XHRcdGlmKCBzdGF0ZSA9PT0gdHJ1ZSAmJiB0cnV1KCBlbGVtZW50ICkgJiYgcmVzdWx0ICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHRcdH1lbHNlIGlmKCBzdGF0ZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRcdFx0fWVsc2UgaWYoIHN0YXRlID09PSBmYWxzZSAmJiBmYWx6ZSggZWxlbWVudCApICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHRcdH1lbHNlIGlmKCBzdGF0ZSA9PT0gZmFsc2UgKXtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fWVsc2UgaWYoIGNvbmRpdGlvblR5cGUuRlVOQ1RJT04gJiYgKCAvXltBLVpdLyApLnRlc3QoIGNvbmRpdGlvbi5uYW1lICkgKXtcblx0XHRcdFx0XHRyZXR1cm4gY2xhem9mKCBlbGVtZW50LCBjb25kaXRpb24gKTtcblxuXHRcdFx0XHR9ZWxzZSBpZiggY29uZGl0aW9uVHlwZS5GVU5DVElPTiApe1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBjb25kaXRpb24uYmluZCggc2VsZiApKCBlbGVtZW50LCBpbmRleCApO1xuXG5cdFx0XHRcdFx0aWYoICFwcm90eXBlKCByZXN1bHQsIEJPT0xFQU4gKSApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgaW52YWxpZCBjb25kaXRpb24gcmVzdWx0LCAkeyByZXN1bHQgfWAgKTtcblxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIGBlcnJvciB0ZXN0aW5nIGNvbmRpdGlvbiwgJHsgZWxlbWVudCB9LCAkeyBpbmRleCB9LCAkeyBlcnJvciB9YCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHljaztcbiJdfQ==
