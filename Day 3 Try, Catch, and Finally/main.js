//https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* 
  * 1. The split method is called on the string, which splits the string into an array of characters.
  * 2. The reverse method is called on the resulting array, which reverses the order of the elements in the array.
  * 3. The join method is called on the resulting array, which combines all of the elements of the array into a single string.
*/

function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

function main() {
  const s = eval(readLine());

  reverseString(s);
}
