const fs = require('fs');

// Initialize an empty array to store the strings
let jsonArray = [];

// Define the string to repeat
const baseString = "nickbukovec";

// Define the total length of each string
const targetLength = 128;

for (let i = 0; i < 46; i++) {
  let startIndex = i * 4 % baseString.length; // Start index for slicing

  // Slice the base string to create the repeated string
  let repeatedString = baseString.slice(startIndex) + baseString.repeat(Math.ceil(targetLength / baseString.length));

  // Trim the string to the target length
  repeatedString = repeatedString.slice(0, targetLength);

  // Push the generated string into the array
  jsonArray.push(repeatedString);
}

// Output the JSON array
let str = JSON.stringify(jsonArray, null, 2);
fs.writeFileSync('init_name.json', str);
