function x() {
	var a = 7;
	function y() {
		console.log(a);
	}
	// y();
	// a = 100;
	return y;
}
// x();
// x(function y() {
//		console.log(a);
//	});
var z = x();
console.log(z);
//..........
z();

// function z() {
//     var b=900;
//     function x() {
//         var a=7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();
