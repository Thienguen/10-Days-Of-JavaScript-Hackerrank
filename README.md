# 10 Days Of JavaScript
Brief: When I speed run this thing, you know I'm f

[...]

Explain some stuff may or may not seems obvious to you.

```javascript
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
```

This code is setting up an event listener for standard input from the user in a Node.js environment.

- The `process.stdin.resume()` function allows the program to start receiving standard input from the user,
- The `process.stdin.setEncoding("utf-8")` function sets the encoding for the input to UTF-8.

An empty string called inputString and a variable currentLine are declared and initialized.

Then, an event listener for the 'data' event is set up on process.stdin. This event is triggered whenever the user inputs data, and the callback function is called with the input as an argument. The input is appended to the inputString variable.

Another event listener is set up for the 'end' event, which is triggered when the user has finished inputting data. When this event is triggered, the callback function is called. It processes the inputString by trimming leading and trailing whitespace, splitting it into an array of strings separated by newlines, and trimming leading and trailing whitespace on each of those strings. Finally, the main function is called.

# TBD