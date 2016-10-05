//goes through an array and returns true if inputString is in the array
var contains = function(myArr,inputString) {
    for (var index = 0; index < myArr.length; index = index + 1){
    	var el = myArr[index]
        if (el === inputString) {
        	return true
        }
    }
    return false
}

// PART 0: Write a function called squareDance() that squares each number in an array.

var squareDance = function(numArray) {
	var squaredArray = []
	for(var i =0; i < numArray.length;i++) {
		var squaredNum = numArray[i] * numArray[i]
		squaredArray.push(squaredNum);
	}
	return squaredArray;
}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.





var nicer = function(sentence) {
    var curseWords = ["darn","heck","crappy","dang"]
 	var cleanSentence = ""
 	var sentenceArray = sentence.split(" ")
 	for(var i=0; i < sentenceArray.length; i++){
        if(!contains(curseWords,sentenceArray[i])) {
            cleanSentence += sentenceArray[i] + " "
        }
 	}
    //deletes whitespace at the last index of the cleanSentence string
    cleanSentence = cleanSentence.slice(0,-1)
    return cleanSentence;
}



console.assert(nicer("mom get the heck in here and bring me a darn sandwich.") === "mom get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence. 

var capitalizeAll = function(sentence) {
	var capitalizedWordsArray = []
	var wordsToCapitalize = sentence.split(" ")
	for(var i = 0; i < wordsToCapitalize.length; i++) {
        var word = wordsToCapitalize[i]
        //word sliced to only include first char,capitalizes it, then adds to word sliced to not include first char
		capitalizedWordsArray.push(word.slice(0,1).toUpperCase() + word.slice(1))
	}
	//because words are put in an array then joined, eliminates white space issue of string + " " method
	return capitalizedWordsArray.join(" ");
}

console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

//similar to capitalizeAll above, but only capitalizes first word. Used in properSentences function
var capitalizeWord = function(word) {
    var capitalizedWord = word.slice(0,1).toUpperCase() + word.slice(1)
    return capitalizedWord;
}

var properSentences = function(sentenceToCapitalize) {
	//splits sentence on punctuation, but includes the punctuation. so array would be ["word","!","more words","?"]
	//Need to fix?? - the last sentence is not split.
	var splitSentence = sentenceToCapitalize.split(/([?!.])\s/g)
    var capitalizedSentences = []
    for(var i = 0; i < splitSentence.length; i++) {
        //every even element is a sentence to be capitalized. Every odd element is a punctuation mark that needs a space
        if (i % 2 === 0) {
            capitalizedSentences.push(capitalizeWord(splitSentence[i]))
        } else {
            capitalizedSentences.push(splitSentence[i] + " ")
        }
    }
    return capitalizedSentences.join("");
}

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string. 

var iPutTheFunIn = function(stringToFun) {
	var stringHalf = Math.floor(stringToFun.length / 2)
    var firstHalf = stringToFun.slice(0,stringHalf)
    var secondHalf = stringToFun.slice(stringHalf)
    return firstHalf + "fun" + secondHalf;
}

console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

var pipeline = function(input,firstFunction,secondFunction) {
	var newOutput = firstFunction(input)
	var finalOutput = secondFunction(newOutput)
	return finalOutput;
}
// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
	return n * n
}

var addOne = function(n) {
	return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i ++) {
		newArr.push(arr[i] + '!')
	}
	return newArr;
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
