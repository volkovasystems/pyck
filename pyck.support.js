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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB5Y2suc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjb25kZXYiLCJyZXF1aXJlIiwicmF6ZSIsInplbGYiLCJweWNrIiwibGlzdCIsImNvbmRpdGlvbiIsInN0YXRlIiwic2VsZiIsImZpbHRlciIsImVsZW1lbnQiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiOztBQUVBLElBQU1HLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCQyxTQUFyQixFQUFnQ0MsS0FBaEMsRUFBdUM7QUFDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBLEtBQUlDLE9BQU9MLEtBQU0sSUFBTixDQUFYOztBQUVBLFFBQU9ELEtBQU1HLElBQU4sRUFBYUksTUFBYixDQUFxQixVQUFFQyxPQUFGLFVBQWVWLE9BQU9XLElBQVAsQ0FBYUgsSUFBYixFQUFxQkUsT0FBckIsRUFBOEJKLFNBQTlCLEVBQXlDQyxLQUF6QyxDQUFmLEVBQXJCLENBQVA7QUFDQSxDQTlCRDs7QUFnQ0FLLE9BQU9DLE9BQVAsR0FBaUJULElBQWpCIiwiZmlsZSI6InB5Y2suc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xyXG5cdEBtb2R1bGUtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXHJcblxyXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwicHlja1wiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJweWNrL3B5Y2suanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwicHljay5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInB5Y2tcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcHljay5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwicHljay10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdFBpY2sgZWxlbWVudHMgYmFzZWQgb24gY29uZGl0aW9uLlxyXG5cclxuXHRcdENvbmRpdGlvbnMgbWF5IGJlIHR5cGUsIGZ1bmN0aW9uLCBjbGFzcyBvciBhY3R1YWwgdmFsdWUgdG8gYmUgY29tcGFyZWQuXHJcblxyXG5cdFx0U2V0dGluZyBzdGF0ZSB3aWxsIGZ1cnRoZXIgY2hlY2sgaWYgdGhlIGVsZW1lbnQgaXMgbm9uLW51bGwsIG5vbi11bmRlZmluZWQsXHJcblx0XHRcdG5vbi1lbXB0eSBzdHJpbmcsIG9iamVjdCBvciBhcnJheSwgbm90IEluZmluaXR5IGFuZCBOYU4gaWYgc3RhdGUgaXMgdHJ1ZSBvdGhlcndpc2VcclxuXHRcdFx0aXQgd2lsbCBjaGVjayBmb3IgZmFsc3kgdmFsdWVzLlxyXG5cclxuXHRcdElmIGNvbmRpdGlvbiBpcyBhIGZ1bmN0aW9uIGl0IHNob3VsZCByZXR1cm4gYSBib29sZWFuIHJlc3VsdCBlbHNlLFxyXG5cdFx0XHR0aGlzIHdpbGwgdGhyb3cgYW4gZXJyb3IuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJjb25kZXZcIjogXCJjb25kZXZcIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGNvbmRldiA9IHJlcXVpcmUoIFwiY29uZGV2XCIgKTtcclxuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XHJcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xyXG5cclxuY29uc3QgcHljayA9IGZ1bmN0aW9uIHB5Y2soIGxpc3QsIGNvbmRpdGlvbiwgc3RhdGUgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImxpc3Q6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0XCJBcmd1bWVudHNcIixcclxuXHRcdFx0XHRcdFwiWypdXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwiY29uZGl0aW9uOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XHRSZWdFeHAsXHJcblx0XHRcdFx0XHRCT09MRUFOLFxyXG5cdFx0XHRcdFx0RlVOQ1RJT04sXHJcblx0XHRcdFx0XHROVU1CRVIsXHJcblx0XHRcdFx0XHRPQkpFQ1QsXHJcblx0XHRcdFx0XHRTVFJJTkcsXHJcblx0XHRcdFx0XHRVTkRFRklORUQsXHJcblx0XHRcdFx0XHRTWU1CT0wsXHJcblx0XHRcdFx0XHRcIipcIixcclxuXHRcdFx0XHRcdFwiWypdXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwic3RhdGVcIjogXCJib29sZWFuXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcclxuXHJcblx0cmV0dXJuIHJhemUoIGxpc3QgKS5maWx0ZXIoICggZWxlbWVudCApID0+IGNvbmRldi5iaW5kKCBzZWxmICkoIGVsZW1lbnQsIGNvbmRpdGlvbiwgc3RhdGUgKSApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBweWNrO1xyXG4iXX0=
//# sourceMappingURL=pyck.support.js.map
