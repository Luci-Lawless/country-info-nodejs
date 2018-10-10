const readJsonFile = require('./json-file-reader.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question("Type the name of a country to display information: ", (answer) => {
    const capitalizeAnswer = (country) => {
      let splitWord = country.toLowerCase().split(' ');
      for (let i = 0; i < splitWord.length; i++) {
        splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].substring(1);
      }
      return splitWord.join(' ');
    }
    console.log('answer: ' + answer);
    const showCountry = (parsed) => {
      const countryName = capitalizeAnswer(answer);

      console.log('countryName: ' + countryName);

      for (let i = 0; i < parsed.length; i ++) {
        if (parsed[i].name === countryName) {
          console.log ("Country: " + parsed[i].name);
          console.log("Capital: " + parsed[i].capital);
          console.log("Languages: " + parsed[i].languages);
          console.log ("Top Level Domain " + parsed[i].topLevelDomain);
          return
        }
      }
    }
    readJsonFile('./countries.json', showCountry);
    rl.close();
  });
