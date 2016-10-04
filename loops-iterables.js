/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var sumOfArray = function(numArray) {
	var sum = 0
	for(var i=0;i < numArray.length; i++) {
		sum += numArray[i]
	}
	return sum;
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function(numArray) {
	var max = numArray[0]
	for(var i = 1; i < numArray.length;i++) {
		if (max < numArray[i]) {
			max = numArray[i]
		}
	}
	return max;
}
console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){
    // YOUR CODE HERE
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */



console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

function findLongestWord(sentence){
    // YOUR CODE HERE
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */



console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

http://matthiasak.github.io/arbiter-frame/#var%20maxOfArray%20%3D%20function%28numArray%29%20%7B%0A%09var%20max%20%3D%20numArray%5B0%5D%0A%09for%28var%20i%20%3D%201%3B%20i%20%3C%20numArray.length%3Bi++%29%20%7B%0A%09%09if%20%28max%20%3C%20numArray%5Bi%5D%29%20%7B%0A%09%09%09max%20%3D%20numArray%5Bi%5D%0A%09%09%7D%0A%09%7D%0A%09return%20max%3B%0A%7D%0Aassert%28maxOfArray%28%5B2%2C4%2C3%5D%29%20%3D%3D%3D%204%29%0Aassert%28maxOfArray%28%5B10%2C9%2C8%2C100%2C7%2C6%5D%29%20%3D%3D%3D%20100%29%0Aassert%28isNaN%28maxOfArray%28%5B1%2C2%2C%27bucklemyshoe%27%5D%29%29%29%0A%0A%0A/**%0A%20*%20PART%202%0A%20*%0A%20*%20Write%20a%20function%20isVowel%28%29%20that%20takes%20a%20character%20%28i.e.%20a%20string%20of%20length%201%29%0A%20*%20and%20returns%20true%20if%20it%20is%20a%20vowel%2C%20false%20otherwise.%0A%20*/%0A%0Afunction%20isVowel%28symbol%29%7B%0A%20%20%20%20//%20YOUR%20CODE%20HERE%0A%7D%0A%0Aconsole.assert%28isVowel%280%29%20%3D%3D%3D%20false%29%3B%0Aconsole.assert%28isVowel%28%22B%22%29%20%3D%3D%3D%20false%29%3B%0Aconsole.assert%28isVowel%28%22b%22%29%20%3D%3D%3D%20false%29%3B%0Aconsole.assert%28isVowel%28%22a%22%29%20%3D%3D%3D%20true%29%3B%0Aconsole.assert%28isVowel%28%22E%22%29%20%3D%3D%3D%20true%29%3B%0A%0A/**%0A%20*%20Part%203%0A%20*%0A%20*%20Define%20a%20function%20reverse%28%29%20that%20computes%0A%20*%20the%20reversal%20of%20a%20string.%20For%20example%2C%0A%20*%20reverse%28%22skoob%22%29%20should%20return%20the%0A%20*%20string%20%22books%22.%0A%20*/%0A%0A%0Aconsole.assert%28reverse%28%22books%22%29%20%3D%3D%3D%20%22skoob%22%29%0Aconsole.assert%28reverse%28%22we%20don%27t%20want%20no%20trouble%22%29%20%3D%3D%3D%20%22elbuort%20on%20tnaw%20t%27nod%20ew%22%29%0A%0A%0A/**%0A%20*%20Part%204%0A%20*%0A%20*%20write%20a%20function%20the%20returns%20a%20FizzBuzz%20string%20for%20some%20number%20N%20%28counting%20up%20from%201%29.%0A%20*%20-%20for%20every%20number%20that%20isn%27t%20a%20multiple%20of%203%20or%205%2C%20return%20a%20period%20%22.%22%0A%20*%20-%20for%20every%20number%20that%20is%20a%20multiple%20of%203%20%28but%20not%205%29%2C%20return%20%22fizz%22%0A%20*%20-%20for%20every%20number%20that%20is%20a%20multiple%20of%205%20%28but%20not%203%29%2C%20return%20%22buzz%22%0A%20*%20-%20for%20every%20number%20that%20is%20a%20multiple%20of%203%20and%205%2C%20return%20%22fizzbuzz%22%0A%20*/%0A%0A%0A%0Aconsole.assert%28fizzbuzz%281%29%20%3D%3D%3D%20%22.%22%29%0Aconsole.assert%28fizzbuzz%282%29%20%3D%3D%3D%20%22..%22%29%0Aconsole.assert%28fizzbuzz%283%29%20%3D%3D%3D%20%22..fizz%22%29%0Aconsole.assert%28fizzbuzz%285%29%20%3D%3D%3D%20%22..fizz.buzz%22%29%0Aconsole.assert%28fizzbuzz%2810%29%20%3D%3D%3D%20%22..fizz.buzzfizz..fizzbuzz%22%29%0A%0A/**%0A%20*%20Part%205%0A%20*%0A%20*%20Write%20a%20function%20findLongestWord%28%29%20that%20takes%20a%20string%20of%20%0A%20words%20and%20returns%20the%20longest%20word.%0A%20*%20i.e.%20findLongestWord%28%22a%20book%20full%20of%20dogs%22%29%20should%20return%20%22book%22%0A%20*/%0A%0Afunction%20findLongestWord%28sentence%29%7B%0A%20%20%20%20//%20YOUR%20CODE%20HERE%0A%7D%0A%0Aconsole.assert%28findLongestWord%28%22a%20book%20full%20of%20dogs%22%29%20%3D%3D%3D%20%22book%22%29%0Aconsole.assert%28findLongestWord%28%22don%27t%20mess%20with%20Texas%22%29%20%3D%3D%3D%20%22Texas%22%29%0A%0A%0A%0A/**%0A%20*%20PART%206%0A%20*%0A%20*%20write%20a%20function%20that%20returns%20the%20Greatest%20Common%20Denominator%20of%20two%20numbers%0A%20*%20-%20if%20no%20GCD%20exists%2C%20return%201%0A%20*/%0A%0A%0A%0Aconsole.assert%28GCD%285%2C1%29%20%3D%3D%3D%201%29%3B%0Aconsole.assert%28GCD%2815%2C3%29%20%3D%3D%3D%203%29%3B%0Aconsole.assert%28GCD%2815%2C5%29%20%3D%3D%3D%205%29%3B%0Aconsole.assert%28GCD%2850%2C20%29%20%3D%3D%3D%2010%29%3B
