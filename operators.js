// operators
// 	operants
// 	operator
//
// uniary
// 	+
// 		convert the string or boolean to number(usefull in converting the user entered string in text box to number)
// 	-
// 		makes the number negative
// 	++
// 		postfix++
// 		++prefix
// 	--
// 		postfix--
// 		--prefix
// 	typeof
// 		typeof variable
//
//
// binary
// 	Addition +,
// 	Subtraction -,
// 	Multiplication *,
// 	Division /,
// 	Remainder %,
// 	Exponentiation **
//
// shorthand operator
// 	+=
// 	-=
// 	*=
// 	/=
// 	%=
// 	**=
//
// comparison operator
// 	returns true or false based on the condition
// 		==	equal to
// 		===	equal value and equal type
// 		!=	not equal
// 		!==	not equal value or not equal type
// 		>	greater than
// 		<	less than
// 		>=	greater than or equal to
// 		<=	less than or equal to
//
//
//
// Logical operators
// 	&&	and
// 	||	or
// 	!	not
console.clear();
let a = +"5";
let b = -5;
let i = 0;
i++;
console.log("i", i);
++i;
console.log("i", i);
console.log("i", ++i);
console.log("i", i++);
console.log("i", i);
console.log("typeof variable a is ", typeof a);
let someDummyVar = null;
console.log("typeof variable someDummyVar is ", typeof someDummyVar);
// exponent
let exponentResult = 2 ** 4; // 2 * 2 * 2 * 2
console.log("exponentResult ", exponentResult);
let t = 40;
t += 20; // t = t + 20;
console.log("t ", t);
