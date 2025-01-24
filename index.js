// Author: Alexander Barry
// Date created: Jan 20, 2025
// Title: Alec's Simple CLI Password Generator
// Cohort: SD12
// FullStack JavaScript QAP 1

const process = require("process");
const arguments = process.argv.slice(2);

const validFlags = [
  "--help",
  "--he",
  "--length",
  "--le",
  "--uppercase",
  "--uc",
  "--only-uppercase",
  "--ouc",
  "--symbols",
  "--sy",
  "--numbers",
  "--nu",
];

//This portion functions as some additional error handling logic for invalid flag commands

arguments.forEach((arg) => {
  if (arg.startsWith("--") && !validFlags.includes(arg)) {
    console.error(
      `Error: Invalid flag "${arg}". Use --help to see the list of valid flags.`
    );
    process.exit(1);
  }
});

if (arguments.includes("--help") || arguments.includes("--he")) {
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
            --only-uppercase   Include strictly uppercase characters in your password
            --symbols          Include symbols in your password
            --numbers          Include numbers in your password

            Shorthand versions, respectively...

            --he
            --le
            --uc
            --ouc
            --sy
            --nu
            
        Notes: 

        -8 will be the default length of the password
        -the default pool will be comprised of lowercase letters until modified by commands
        
        Usage sample: 
        
            node index.js --length 5 --symbols
        `);
  process.exit(0);
}

let passwordLength = 8;
const lengthIndex =
  arguments.indexOf("--length") !== -1
    ? arguments.indexOf("--length")
    : arguments.indexOf("--le");

// This portion of code checks for a value which immediately follows our flag and parse it to an integer

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

function createPassword(length, commands) {
  const lowerCaseChars = "abcdefghijklmnopqrstufwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*;:,.()_+[]{}|<>?";

  let characterPool = "";

  if (commands.onlyUpperCase) {
    characterPool = upperCaseChars; // Our feature essentially resets the default pool of letters to strictly uppercase
  } else {
    characterPool = lowerCaseChars;
  }
  if (commands.upperCaseChars) characterPool += upperCaseChars;
  if (commands.numbers) characterPool += numbers;
  if (commands.symbols) characterPool += symbols;

  if (characterPool.length === 0) {
    console.error(
      "Error: You have not identified a set of characters to generate a password from. Please utilize flag commands to select more."
    );
    process.exit(1);
  }

  // This next portion of code will select random characters from our pool for however long the length of the password is specified to be.

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
}

const commands = {
  upperCaseChars:
    arguments.includes("--uppercase") || arguments.includes("--uc"),
  onlyUpperCase:
    arguments.includes("--only-uppercase") || arguments.includes("--ouc"),
  numbers: arguments.includes("--numbers") || arguments.includes("--nu"),
  symbols: arguments.includes("--symbols") || arguments.includes("--sy"),
};

const password = createPassword(passwordLength, commands);
console.log(`Your password: ${password}`);
