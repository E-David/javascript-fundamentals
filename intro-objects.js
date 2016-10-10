// NORMAL MODE ( 0 - 4 )


// Part 0 

// Write a function called flipColor. This function may be 
// used to change the color of a tile in a game. It should 
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and 
// vice-versa.

var flipColor = function(tile) {
    if (tile["color"] === "blue") {
        tile["color"] = "red"
    } else if (tile["color"] === "red") {
        tile["color"] = "blue"
    }
    return tile;
}

var tile = {
    width: "200px",
    height: "200px",
    background: "black",
    color: "blue"
}

var tile2 = flipColor(tile)
console.assert(tile2.color === "red")
console.assert(flipColor(tile2).color === "blue")


// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

var getFullNames = function(namesArray){
    var fullNames = []
    for(var i = 0; i < namesArray.length; i++) {
        var combinedName = namesArray[i]["first"] + " " + namesArray[i]["last"]
        fullNames.push(combinedName)
    }
    return fullNames;
}

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

console.assert(getFullNames(customers)[1] === "John Smith")




// Part 2

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor* 
// (which is, almost, what this is) should take a name input, and the dog should receive the 
// assigned name.




// Give the dog a method called .speak(). speak() should receive a string as input and 
// return a new version of that string where the first letter of every word is replaced 
// with the letter 'r'.



var generateDog = function(dogName){
    var dog = {
        name: dogName,
        legs: 4,
        speak: function(humanWords){
            var dogWords = []
            var humanWordsArray = humanWords.split(" ")
            for(var i = 0; i < humanWordsArray.length; i++){
                var humanWord = humanWordsArray[i]
                var dogWord = humanWord.replace(humanWord[0],"r")
                dogWords.push(dogWord)
            }
            return dogWords.join(" ")
        }
    }
    return dog;
}
var dog = generateDog('rex')

console.assert(dog.legs === 4)
console.assert(dog.name === 'rex')

var dog = generateDog('carl')
console.assert(dog.name === 'carl')

console.assert(dog.speak('i love you') === 'r rove rou')
console.assert(dog.speak('so hungry') === 'ro rungry')




// Part 3

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.


var pluck = function(objectList, objectProperty){
    var extractedProperties = []
    for(var i = 0; i < objectList.length; i++){
        extractedProperties.push(objectList[i][objectProperty])
    }
    return extractedProperties;
}

// e.g:
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]

console.assert(pluck(stooges, 'name')[0] === 'moe')
console.assert(pluck(stooges, 'age')[2] === 60)



// Part 4

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.

var trimPunct = function(paragraph) {
    //removes anything that isn't a word,whitespace,or this SPECIFIC apostrophe - unsure how to include all kinds of apostrophes
    var trimmedParagraph = paragraph.replace(/[^\w|\s|(’)]/g," ")
    //replaces double spaces with a single space
    return trimmedParagraph.replace(/\s+/g," ")
}

var contains = function(object,ele) {
    for(var i = 0; i < object.length; i++) {
        if(object[i] === ele){
            return true;
        }
    }
    return false;
}

var getCounts = function(paragraph) {
    var wordsFromText = trimPunct(paragraph).toLowerCase().split(" ")
    var wordCounter = {}
    for(var i = 0; i < wordsFromText.length; i++) {
        var word = wordsFromText[i]
        if (word in wordCounter){
            wordCounter[word] += 1
        } else {
            wordCounter[word] = 1
        }
    }
    return wordCounter;
}

var text = "It’s obviously not the case, but T’Challa—the Black Panther and mythical ruler of Wakanda—has always struck as the product of the black nationalist dream, a walking revocation of white supremacist myth. T’Challa isn’t just a superhero in the physical sense, he is one of the smartest people in the world, ruling the most advanced civilization on the planet. Wakanda’s status as ever-independent seems to eerily parallel Ethiopia’s history as well as its place in the broader black imagination. Maybe it’s only me, but I can’t read Jason Aaron’s superb “See Wakanda And Die” and not think of Adowa.\
Comic book creators, like all story-tellers, get great mileage out of myth and history. But given the society we live in, some people’s myths are privileged over others. Some of that is changing, no doubt. In the more recent incarnations of T’Challa you can see Christopher Priest invoking the language of the Hausa or Reginald Hudlin employing the legacy of colonialism. These were shrewd artistic decisions, rooted in the fact that anyone writing Black Panther enjoys an immediate, if paradoxical, advantage: the black diaspora is terra incognita for much of the world. What does the broader world really know of Adowa? Of Nanny and Cudjoe? Of the Maji-Maji rebellion? Of Legba and Oshun?  Of Shine? Of High John The Conqueror? T’Challa’s writers have always enjoyed access to a rich and under-utilized pool of allusion and invocation."

var wordFrequencyObject = getCounts(text)

console.assert(wordFrequencyObject.but === 3)
console.assert(wordFrequencyObject.black === 5)




// ADVENTURE MODE ( 5 - 8 )

// for these problems you will need to use the for-in loop, and the special 
// `this` keyword.


// Part 5

// Write a function called reverseObject(). It should take as input an object, 
// and it should output a new object where the keys and values are reversed.

var reverseObject = function(objectToReverse) {
    var reversedObject = {}
    for( var property in objectToReverse) {
        reversedObject[objectToReverse[property]] = property
    }
    return reversedObject;
}

var object = {
    occupants: 4,
    apartment_no: "2b",
    structural_integrity: "failing"
}


var reversed = reverseObject(object)
console.assert(reversed['2b'] === 'apartment_no')


// Part 6

// Write a function called reverseAll(). It should take as input an array of 
// objects, and it should output an array of objects with the keys and values
// reversed.

var reverseAll = function(objectArray) {
    var reversedObjects = []
    for(var i = 0; i < objectArray.length; i++){
        reversedObjects.push(reverseObject(objectArray[i]))
    }
    return reversedObjects;
}

var users = [{obama: 'president@gmail.com',hobby: 'basketball'},{trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},{bush: 'jeb!@hotmail.com',hobby:'portraiture'}]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

var flippedUsers = reverseAll(users)

console.assert(flippedUsers[0]['president@gmail.com'] === 'obama')
console.assert(flippedUsers[1]['americamoneywin@yahoo.com'] === 'trump')
console.assert(flippedUsers[1].dealmaking === 'hobby')


// Part 7

// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions in the properties object.


//returns true only if key-value pairs from object2 all match some key-value pairs in object 1
var compareObjects = function(object1,object2) {
    for(var property in object2){
        if (object1[property] !== object2[property]) {
            return false
        }
    }
    return true;
}

var where = function(objectList,requiredProperty) {
    var objectContainsProperty = []
    for(var i = 0; i < objectList.length; i++) {
        //compare each object in list with requiredProperty using compareObjects()
        if (compareObjects(objectList[i],requiredProperty)){
           objectContainsProperty.push(objectList[i])
        }
    }
    return objectContainsProperty
}

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

var sh8spr = where(plays, {author: "Shakespeare"})
console.assert(sh8spr instanceof Array)
console.assert(sh8spr.length === 5)
console.assert(sh8spr[0]['title'] === "Cymbeline")

sh8spr = where(plays, {author: "Shakespeare", year: 1611})
console.assert(sh8spr.length === 0)

sh8spr = where(plays, {author: "Shakespeare", year: 1623})
console.assert(sh8spr.length === 2)

var midcentury = where(plays, {year: 1949})
console.assert(midcentury.length === 2)

// Part 8

// Create an object that has a name attribute and a method called personalize. 
// personalize should take a function as input. when personalize is called, 
// an introductory string should be inserted before the input function's
// return value. Use the example in the console.assert to understand
// exactly how you should write the method. Including the period! 


var politeObject = {
    name: "Frank",
    personalize: function(inputFunction){
        var introString = "Hi, my name is "
        var secondIntroString = ", and the \ \ \ \ result is "
        return introString + this.name + secondIntroString + inputFunction() + "."
    }
}


var helloWorld = function() {
    return "hello world"
}

var personalizedResult = politeObject.personalize(helloWorld)
console.assert(personalizedResult === "Hi, my name is Frank, and the \
    result is hello world.")
