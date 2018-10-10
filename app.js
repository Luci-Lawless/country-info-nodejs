const readJsonFile = require('./json-file-reader.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Type the name of a country to display information: ", (answer) => {
//Capitalize each word from user input, in case a country has 2 or more words in its name.
  const capitalizeAnswer = (country) => {
    let splitWord = country.toLowerCase().split(' '); //Split the given string into an array of strings by separating it into substrings
    for (let i = 0; i < splitWord.length; i++) {
      splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].substring(1);
    }
    return splitWord.join(' ');
  }

  const showCountry = (parsed) => {
    let countryName = capitalizeAnswer(answer); //Get input from the user, without case sensitive

    for (let i = 0; i < parsed.length; i ++) {
      if (parsed[i].name === countryName) {
        console.log ("Country: " + parsed[i].name);
        console.log("Capital: " + parsed[i].capital);
        console.log("Languages: " + parsed[i].languages);
        console.log ("Top Level Domain " + parsed[i].topLevelDomain);
      }
    }
  }
  readJsonFile('./countries.json', showCountry); //Call module function, passing the json file and the callback function as arguments
  rl.close(); //After getting the input, prevent user from typing - closes readline.
});
