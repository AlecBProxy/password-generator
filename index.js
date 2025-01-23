// Author: Alexander Barr
// Date created: Jan 20, 2025
// Title: Alec's Simple CLI Password Generator
// Cohort: SD12

const process = require("process");
const arguments = process.argv.slice(2);

if (arguments.includes("--help")) {
  console.log(`
        Alec's Simple CLI Password Generator

        !Final output is visible! 
        Please ensure no one is peeping at your generated password!
        
        Usage structure:

            node index.js (--length <number>) (--uppercase) (--symbols) (--numbers)
            
        Commands:

            --help             Display this help menu.
            --length           Provide a length for your password
            --uppercase        Include uppercase characters in your password
            --symbols          Include symbols in your password
            --numbers          Include numbers in your password
            
        Notes: 

        -8 will be the default length of the password
        -lowercase letters will be the default pool
        
        Usage sample: 
        
            node index.js --length 5 --symbols
        `);
  process.exit(0);
}

let passwordLength = 8;
const lengthIndex = arguments.indexOf("--length");

if (lengthIndex !== -1 && arguments[lengthIndex + 1]) {
  const lengthValue = parseInt(arguments[lengthIndex + 1], 10);

  if (isNaN(lengthValue) || lengthValue <= 0) {
    console.error(
      "Error: Please use a positive number when specifying length."
    );
    process.exit(1);
  }

  // This will re-assign the length to a non-default, user-selected value.

  passwordLength = lengthValue;
}

function createPassword(length, options) {
  const lowerCaseChars = "abcdefghijklmnopqrstufwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*;:,.()_+[]{}|<>?";

  let characterPool = lowerCaseChars;
  if (commands.upperCaseChars) characterPool += upperCaseChars;
  if (commands.numbers) characterPool += numbers;
  if (commands.symbols) characterPool += symbols;

  if (characterPool.length === 0) {
    console.error(
      "Error: You have not identified a set of characters to generate a password from. Please utilize flag commands to select more."
    );
    process.exit(1);
  }

  // This portion of code will select random characters from our pool for however long the length of the password is specified to be.

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
}

const commands = {
  upperCaseChars: arguments.includes("--uppercase"),
  numbers: arguments.includes("--numbers"),
  symbols: arguments.includes("--symbols"),
};

const password = createPassword(passwordLength, commands);
console.log(`Your password: ${password}`);
