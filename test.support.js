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

var assert = require("should");



//: @client:
var pyck = require("./pyck.support.js");
//: @end-client







//: @client:

describe("pyck", function () {

	describe("`pyck( [ 1 ] )`", function () {
		it("should be equal to empty array", function () {

			assert.deepEqual(pyck([1]), []);

		});
	});

	describe("`pyck( [ 1, 2, 3, 'hello' ], STRING )`", function () {
		it("should be equal to [ 'hello' ]", function () {

			assert.deepEqual(pyck([1, 2, 3, "hello"], STRING), ["hello"]);

		});
	});

	describe("`pyck( [ true, 2, 3, 'hello' ], NUMBER, true )`", function () {
		it("should be equal to [ 2, 3 ]", function () {

			assert.deepEqual(pyck([true, 2, 3, "hello"], NUMBER, true), [2, 3]);

		});
	});

	describe("`pyck( [ { }, 1, 2, 3 ], OBJECT )`", function () {
		it("should be equal to [ { } ]", function () {

			assert.deepEqual(pyck([{}, 1, 2, 3], OBJECT), [{}]);

		});
	});

	describe("`pyck( [ 1, 2, 3 ], [ 1 ] )`", function () {
		it("should be equal to [ 1 ]", function () {

			assert.deepEqual(pyck([1, 2, 3], [1]), [1]);

		});
	});

	describe("`pyck( [ 1, 2, 3, [ 4, 5, 6, 'a' ] ], NUMBER )`", function () {
		it("should be equal to [ 1, 2, 3 ]", function () {

			assert.deepEqual(pyck([1, 2, 3, [4, 5, 6, "a"]], NUMBER), [1, 2, 3]);

		});
	});

	describe("`pyck( [ Date, 1, 2, 3 ], Date )`", function () {
		it("should be equal to [ Date ]", function () {

			assert.deepEqual(pyck([Date, 1, 2, 3], Date), [Date]);

		});
	});

	describe("`pyck( [ Array, 1, 2, 3, { } ], FUNCTION )`", function () {
		it("should be equal to [ Array ]", function () {

			assert.deepEqual(pyck([Array, 1, 2, 3, {}], FUNCTION), [Array]);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwicHljayIsImRlc2NyaWJlIiwiaXQiLCJkZWVwRXF1YWwiLCJTVFJJTkciLCJOVU1CRVIiLCJPQkpFQ1QiLCJEYXRlIiwiQXJyYXkiLCJGVU5DVElPTiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxtQkFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QkEsVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLENBQUUsQ0FBRixDQUFOLENBQWxCLEVBQWlDLEVBQWpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLHdDQUFWLEVBQW9ELFlBQU87QUFDMURDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxPQUFYLENBQU4sRUFBNEJJLE1BQTVCLENBQWxCLEVBQXdELENBQUUsT0FBRixDQUF4RDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUgsVUFBVSxpREFBVixFQUE2RCxZQUFPO0FBQ25FQyxLQUFJLDZCQUFKLEVBQW1DLFlBQU87O0FBRXpDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLENBQUUsSUFBRixFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsT0FBZCxDQUFOLEVBQStCSyxNQUEvQixFQUF1QyxJQUF2QyxDQUFsQixFQUFpRSxDQUFFLENBQUYsRUFBSyxDQUFMLENBQWpFOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBSixVQUFVLG9DQUFWLEVBQWdELFlBQU87QUFDdERDLEtBQUksNEJBQUosRUFBa0MsWUFBTzs7QUFFeENKLFVBQU9LLFNBQVAsQ0FBa0JILEtBQU0sQ0FBRSxFQUFGLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQU4sRUFBd0JNLE1BQXhCLENBQWxCLEVBQW9ELENBQUUsRUFBRixDQUFwRDs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUwsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLDBCQUFKLEVBQWdDLFlBQU87O0FBRXRDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQU4sRUFBbUIsQ0FBRSxDQUFGLENBQW5CLENBQWxCLEVBQThDLENBQUUsQ0FBRixDQUE5Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSxpREFBVixFQUE2RCxZQUFPO0FBQ25FQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDSixVQUFPSyxTQUFQLENBQWtCSCxLQUFNLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxHQUFYLENBQVgsQ0FBTixFQUFxQ0ssTUFBckMsQ0FBbEIsRUFBaUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBakU7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFKLFVBQVUsbUNBQVYsRUFBK0MsWUFBTztBQUNyREMsS0FBSSw2QkFBSixFQUFtQyxZQUFPOztBQUV6Q0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxDQUFFTyxJQUFGLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQU4sRUFBeUJBLElBQXpCLENBQWxCLEVBQW1ELENBQUVBLElBQUYsQ0FBbkQ7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFOLFVBQVUsNkNBQVYsRUFBeUQsWUFBTztBQUMvREMsS0FBSSw4QkFBSixFQUFvQyxZQUFPOztBQUUxQ0osVUFBT0ssU0FBUCxDQUFrQkgsS0FBTSxDQUFFUSxLQUFGLEVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBQU4sRUFBK0JDLFFBQS9CLENBQWxCLEVBQTZELENBQUVELEtBQUYsQ0FBN0Q7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUEsQ0FsRUQ7O0FBb0VBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicHlja1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwicHljay90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcHljay5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHB5Y2sgPSByZXF1aXJlKCBcIi4vcHljay5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwicHlja1wiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImBweWNrKCBbIDEgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBlbXB0eSBhcnJheVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBweWNrKCBbIDEgXSApLCBbIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBweWNrKCBbIDEsIDIsIDMsICdoZWxsbycgXSwgU1RSSU5HIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgJ2hlbGxvJyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHB5Y2soIFsgMSwgMiwgMywgXCJoZWxsb1wiIF0sIFNUUklORyApLCBbIFwiaGVsbG9cIiBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHljayggWyB0cnVlLCAyLCAzLCAnaGVsbG8nIF0sIE5VTUJFUiwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDIsIDMgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBweWNrKCBbIHRydWUsIDIsIDMsIFwiaGVsbG9cIiBdLCBOVU1CRVIsIHRydWUgKSwgWyAyLCAzIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBweWNrKCBbIHsgfSwgMSwgMiwgMyBdLCBPQkpFQ1QgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyB7IH0gXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBweWNrKCBbIHsgfSwgMSwgMiwgMyBdLCBPQkpFQ1QgKSwgWyB7IH0gXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHB5Y2soIFsgMSwgMiwgMyBdLCBbIDEgXSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIDEgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBweWNrKCBbIDEsIDIsIDMgXSwgWyAxIF0gKSwgWyAxIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBweWNrKCBbIDEsIDIsIDMsIFsgNCwgNSwgNiwgJ2EnIF0gXSwgTlVNQkVSIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgMSwgMiwgMyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHB5Y2soIFsgMSwgMiwgMywgWyA0LCA1LCA2LCBcImFcIiBdIF0sIE5VTUJFUiApLCBbIDEsIDIsIDMgXSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHB5Y2soIFsgRGF0ZSwgMSwgMiwgMyBdLCBEYXRlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgRGF0ZSBdXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5kZWVwRXF1YWwoIHB5Y2soIFsgRGF0ZSwgMSwgMiwgMyBdLCBEYXRlICksIFsgRGF0ZSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgcHljayggWyBBcnJheSwgMSwgMiwgMywgeyB9IF0sIEZVTkNUSU9OIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgQXJyYXkgXVwiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZGVlcEVxdWFsKCBweWNrKCBbIEFycmF5LCAxLCAyLCAzLCB7IH0gXSwgRlVOQ1RJT04gKSwgWyBBcnJheSBdICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
