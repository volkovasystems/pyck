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
			throw new Error("error testing condition, " + element + ", " + index + ", " + error.stack);
		}
	});
};

module.exports = pyck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB5Y2suanMiXSwibmFtZXMiOlsiY2xhem9mIiwicmVxdWlyZSIsImRvdWJ0IiwiZmFsemUiLCJmYWx6eSIsImhhcmRlbiIsInByb3R5cGUiLCJyYXplIiwidHJ1dSIsInplbGYiLCJweWNrIiwibGlzdCIsImNvbmRpdGlvbiIsInN0YXRlIiwiQVJSQVkiLCJyZWR1Y2UiLCJvbkVhY2hDb25kaXRpb24iLCJhY2N1bXVsYW50IiwiY29uY2F0IiwiRXJyb3IiLCJzZWxmIiwiY29uZGl0aW9uVHlwZSIsImZpbHRlciIsIm9uRWFjaEVsZW1lbnQiLCJlbGVtZW50IiwiaW5kZXgiLCJTVFJJTkciLCJCT09MRUFOIiwiRlVOQ1RJT04iLCJOVU1CRVIiLCJPQkpFQ1QiLCJVTkRFRklORUQiLCJTWU1CT0wiLCJyZXN1bHQiLCJ0ZXN0IiwibmFtZSIsImJpbmQiLCJlcnJvciIsInN0YWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdFQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssVUFBVUwsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNTyxPQUFPUCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1RLE9BQU9SLFFBQVMsTUFBVCxDQUFiOztBQUVBSSxPQUFRLFNBQVIsRUFBbUIsU0FBbkI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCO0FBQ0FBLE9BQVEsUUFBUixFQUFrQixRQUFsQjtBQUNB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anMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInB5Y2tcIixcblx0XHRcdFwicGF0aFwiOiBcInB5Y2svcHljay5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwicHljay5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJweWNrXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcHljay5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInB5Y2stdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRQaWNrIGVsZW1lbnRzIGJhc2VkIG9uIGNvbmRpdGlvbi5cblxuXHRcdENvbmRpdGlvbnMgbWF5IGJlIHR5cGUsIGZ1bmN0aW9uLCBjbGFzcyBvciBhY3R1YWwgdmFsdWUgdG8gYmUgY29tcGFyZWQuXG5cblx0XHRTZXR0aW5nIHN0YXRlIHdpbGwgZnVydGhlciBjaGVjayBpZiB0aGUgZWxlbWVudCBpcyBub24tbnVsbCwgbm9uLXVuZGVmaW5lZCxcblx0XHRcdG5vbi1lbXB0eSBzdHJpbmcsIG9iamVjdCBvciBhcnJheSwgbm90IEluZmluaXR5IGFuZCBOYU4gaWYgc3RhdGUgaXMgdHJ1ZSBvdGhlcndpc2Vcblx0XHRcdGl0IHdpbGwgY2hlY2sgZm9yIGZhbHN5IHZhbHVlcy5cblxuXHRcdElmIGNvbmRpdGlvbiBpcyBhIGZ1bmN0aW9uIGl0IHNob3VsZCByZXR1cm4gYSBib29sZWFuIHJlc3VsdCBlbHNlLFxuXHRcdFx0dGhpcyB3aWxsIHRocm93IGFuIGVycm9yLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJmYWx6ZVwiOiBcImZhbHplXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInRydXVcIjogXCJ0cnV1XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcbmNvbnN0IGZhbHplID0gcmVxdWlyZSggXCJmYWx6ZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHRydXUgPSByZXF1aXJlKCBcInRydXVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmhhcmRlbiggXCJCT09MRUFOXCIsIFwiYm9vbGVhblwiICk7XG5oYXJkZW4oIFwiRlVOQ1RJT05cIiwgXCJmdW5jdGlvblwiICk7XG5oYXJkZW4oIFwiTlVNQkVSXCIsIFwibnVtYmVyXCIgKTtcbmhhcmRlbiggXCJPQkpFQ1RcIiwgXCJvYmplY3RcIiApO1xuaGFyZGVuKCBcIlNUUklOR1wiLCBcInN0cmluZ1wiICk7XG5oYXJkZW4oIFwiVU5ERUZJTkVEXCIsIFwidW5kZWZpbmVkXCIgKTtcbmhhcmRlbiggXCJTWU1CT0xcIiwgXCJzeW1ib2xcIiApO1xuXG5jb25zdCBweWNrID0gZnVuY3Rpb24gcHljayggbGlzdCwgY29uZGl0aW9uLCBzdGF0ZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiQXJndW1lbnRzXCIsXG5cdFx0XHRcdFx0XCJbKl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImNvbmRpdGlvbjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0Qk9PTEVBTixcblx0XHRcdFx0XHRGVU5DVElPTixcblx0XHRcdFx0XHROVU1CRVIsXG5cdFx0XHRcdFx0T0JKRUNULFxuXHRcdFx0XHRcdFNUUklORyxcblx0XHRcdFx0XHRVTkRFRklORUQsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiW3N0cmluZywgZnVuY3Rpb25dXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJzdGF0ZVwiOiBcImJvb2xlYW5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGRvdWJ0KCBjb25kaXRpb24sIEFSUkFZICkgKXtcblx0XHRyZXR1cm4gY29uZGl0aW9uLnJlZHVjZSggZnVuY3Rpb24gb25FYWNoQ29uZGl0aW9uKCBhY2N1bXVsYW50LCBjb25kaXRpb24gKXtcblx0XHRcdHJldHVybiBhY2N1bXVsYW50LmNvbmNhdCggcHljayggbGlzdCwgY29uZGl0aW9uICkgKTtcblx0XHR9LCBbIF0gKTtcblxuXHR9ZWxzZSBpZiggZmFsenkoIGNvbmRpdGlvbiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgY29uZGl0aW9uXCIgKTtcblx0fVxuXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xuXG5cdGxldCBjb25kaXRpb25UeXBlID0gcHJvdHlwZSggY29uZGl0aW9uICk7XG5cblx0cmV0dXJuIHJhemUoIGxpc3QgKVxuXHRcdC5maWx0ZXIoIGZ1bmN0aW9uIG9uRWFjaEVsZW1lbnQoIGVsZW1lbnQsIGluZGV4ICl7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGlmKCBlbGVtZW50ID09PSBjb25kaXRpb24gKXtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHR9ZWxzZSBpZiggY29uZGl0aW9uVHlwZS5TVFJJTkcgJiZcblx0XHRcdFx0XHQoIGNvbmRpdGlvbiA9PSBCT09MRUFOIHx8XG5cdFx0XHRcdFx0XHRjb25kaXRpb24gPT0gRlVOQ1RJT04gfHxcblx0XHRcdFx0XHRcdGNvbmRpdGlvbiA9PSBOVU1CRVIgfHxcblx0XHRcdFx0XHRcdGNvbmRpdGlvbiA9PSBPQkpFQ1QgfHxcblx0XHRcdFx0XHRcdGNvbmRpdGlvbiA9PSBTVFJJTkcgfHxcblx0XHRcdFx0XHRcdGNvbmRpdGlvbiA9PSBVTkRFRklORUQgfHxcblx0XHRcdFx0XHRcdGNvbmRpdGlvbiA9PSBTWU1CT0wgKSApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gcHJvdHlwZSggZWxlbWVudCwgY29uZGl0aW9uICk7XG5cblx0XHRcdFx0XHRpZiggc3RhdGUgPT09IHRydWUgJiYgdHJ1dSggZWxlbWVudCApICYmIHJlc3VsdCApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdFx0XHR9ZWxzZSBpZiggc3RhdGUgPT09IHRydWUgKXtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdFx0XHRcdH1lbHNlIGlmKCBzdGF0ZSA9PT0gZmFsc2UgJiYgZmFsemUoIGVsZW1lbnQgKSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdFx0XHR9ZWxzZSBpZiggc3RhdGUgPT09IGZhbHNlICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH1lbHNlIGlmKCBjb25kaXRpb25UeXBlLkZVTkNUSU9OICYmICggL15bQS1aXS8gKS50ZXN0KCBjb25kaXRpb24ubmFtZSApICl7XG5cdFx0XHRcdFx0cmV0dXJuIGNsYXpvZiggZWxlbWVudCwgY29uZGl0aW9uICk7XG5cblx0XHRcdFx0fWVsc2UgaWYoIGNvbmRpdGlvblR5cGUuRlVOQ1RJT04gKXtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gY29uZGl0aW9uLmJpbmQoIHNlbGYgKSggZWxlbWVudCwgaW5kZXggKTtcblxuXHRcdFx0XHRcdGlmKCAhcHJvdHlwZSggcmVzdWx0LCBCT09MRUFOICkgKXtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggYGludmFsaWQgY29uZGl0aW9uIHJlc3VsdCwgJHsgcmVzdWx0IH1gICk7XG5cblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBgZXJyb3IgdGVzdGluZyBjb25kaXRpb24sICR7IGVsZW1lbnQgfSwgJHsgaW5kZXggfSwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0XHRcdH1cblx0XHR9ICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHB5Y2s7XG4iXX0=
