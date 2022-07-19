//-----1
//Question: What value is returned from the following statement?

"i'm a lasagna hog".split("").reverse().join("");
//"goh angasal a m'i"

"i'm a lasagna hog".split("");
//['i', "'", 'm', ' ', 'a', ' ', 'l', 'a', 's', 'a', 'g', 'n', 'a', ' ', 'h', 'o', 'g']

"i'm a lasagna hog".split("").reverse();
//['g', 'o', 'h', ' ', 'a', 'n', 'g', 'a', 's', 'a', 'l', ' ', 'a', ' ', 'm', "'", 'i']
/**
 *
 *
 *
 * **********
 *
 */

//-----2
//Question: What is the value of foo?

var foo = 10 + "20";
//undefined

/**
 *
 *
 *
 * **********
 *
 */
//-----3
//Question: What will be the output of the code below?
console.log(0.1 + 0.2 == 0.3);
//false, undefined

console.log(0.30000000000000004 == 0.3);

/**
 *
 *
 *
 * **********
 *
 */
//-------4
//Question: What does the following code print?

console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
console.log("three");
/*
one
three
undefined 
two
*/

/**
 *
 *
 *
 * **********
 *
 */
//-------5
let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript);
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

/** */
let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
/** */
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

/**
 *
 *
 *
 * **********
 *
 */
//-------6
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // set of numbers
let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]); // -> 100

/**
 *
 *
 *
 * **********
 *
 */
//-------7
const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]
/** */
const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']
/** */
const four4values = Array(4).fill(4); // it creates 4 element values filled with '4'
console.log(four4values); // [4, 4, 4, 4]
/**
 *
 *
 *
 * **********
 *
 */
//-------8
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]
/**
 *
 *
 *
 * **********
 *
 */
//-------9
