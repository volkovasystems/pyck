"use strict"; /*;
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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"condev": "condev",
              			"raze": "raze",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var condev = require("condev");
var raze = require("raze");
var zelf = require("zelf");

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
                                                  				RegExp,
                                                  				BOOLEAN,
                                                  				FUNCTION,
                                                  				NUMBER,
                                                  				OBJECT,
                                                  				STRING,
                                                  				UNDEFINED,
                                                  				SYMBOL,
                                                  				"*",
                                                  				"[*]"
                                                  			],
                                                  			"state": "boolean"
                                                  		}
                                                  	@end-meta-configuration
                                                  */

	var self = zelf(this);

	return raze(list).filter(function (element) {return condev.bind(self)(element, condition, state);});
};

module.exports = pyck;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB5Y2suc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjb25kZXYiLCJyZXF1aXJlIiwicmF6ZSIsInplbGYiLCJweWNrIiwibGlzdCIsImNvbmRpdGlvbiIsInN0YXRlIiwic2VsZiIsImZpbHRlciIsImVsZW1lbnQiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCQyxTQUFyQixFQUFnQ0MsS0FBaEMsRUFBdUM7QUFDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBLEtBQUlDLE9BQU9MLEtBQU0sSUFBTixDQUFYOztBQUVBLFFBQU9ELEtBQU1HLElBQU4sRUFBYUksTUFBYixDQUFxQixVQUFFQyxPQUFGLFVBQWVWLE9BQU9XLElBQVAsQ0FBYUgsSUFBYixFQUFxQkUsT0FBckIsRUFBOEJKLFNBQTlCLEVBQXlDQyxLQUF6QyxDQUFmLEVBQXJCLENBQVA7QUFDQSxDQTlCRDs7QUFnQ0FLLE9BQU9DLE9BQVAsR0FBaUJULElBQWpCIiwiZmlsZSI6InB5Y2suc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJweWNrXCIsXG5cdFx0XHRcInBhdGhcIjogXCJweWNrL3B5Y2suanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInB5Y2suanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicHlja1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcHljay5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInB5Y2stdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRQaWNrIGVsZW1lbnRzIGJhc2VkIG9uIGNvbmRpdGlvbi5cblxuXHRcdENvbmRpdGlvbnMgbWF5IGJlIHR5cGUsIGZ1bmN0aW9uLCBjbGFzcyBvciBhY3R1YWwgdmFsdWUgdG8gYmUgY29tcGFyZWQuXG5cblx0XHRTZXR0aW5nIHN0YXRlIHdpbGwgZnVydGhlciBjaGVjayBpZiB0aGUgZWxlbWVudCBpcyBub24tbnVsbCwgbm9uLXVuZGVmaW5lZCxcblx0XHRcdG5vbi1lbXB0eSBzdHJpbmcsIG9iamVjdCBvciBhcnJheSwgbm90IEluZmluaXR5IGFuZCBOYU4gaWYgc3RhdGUgaXMgdHJ1ZSBvdGhlcndpc2Vcblx0XHRcdGl0IHdpbGwgY2hlY2sgZm9yIGZhbHN5IHZhbHVlcy5cblxuXHRcdElmIGNvbmRpdGlvbiBpcyBhIGZ1bmN0aW9uIGl0IHNob3VsZCByZXR1cm4gYSBib29sZWFuIHJlc3VsdCBlbHNlLFxuXHRcdFx0dGhpcyB3aWxsIHRocm93IGFuIGVycm9yLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJjb25kZXZcIjogXCJjb25kZXZcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBjb25kZXYgPSByZXF1aXJlKCBcImNvbmRldlwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5jb25zdCBweWNrID0gZnVuY3Rpb24gcHljayggbGlzdCwgY29uZGl0aW9uLCBzdGF0ZSApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwiQXJndW1lbnRzXCIsXG5cdFx0XHRcdFx0XCJbKl1cIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImNvbmRpdGlvbjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0UmVnRXhwLFxuXHRcdFx0XHRcdEJPT0xFQU4sXG5cdFx0XHRcdFx0RlVOQ1RJT04sXG5cdFx0XHRcdFx0TlVNQkVSLFxuXHRcdFx0XHRcdE9CSkVDVCxcblx0XHRcdFx0XHRTVFJJTkcsXG5cdFx0XHRcdFx0VU5ERUZJTkVELFxuXHRcdFx0XHRcdFNZTUJPTCxcblx0XHRcdFx0XHRcIipcIixcblx0XHRcdFx0XHRcIlsqXVwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwic3RhdGVcIjogXCJib29sZWFuXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xuXG5cdHJldHVybiByYXplKCBsaXN0ICkuZmlsdGVyKCAoIGVsZW1lbnQgKSA9PiBjb25kZXYuYmluZCggc2VsZiApKCBlbGVtZW50LCBjb25kaXRpb24sIHN0YXRlICkgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHljaztcbiJdfQ==
//# sourceMappingURL=pyck.support.js.map
