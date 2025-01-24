# Alec's Simple CLI Password Generator

This is a simple CLI application for instantly generating a user password in-accordance with user preferences.

Through the use of flag commands, users can generate passwords of a specified length, and composition.

As you start the program, ensure to execute the --help command to familiarize yourself with the commands.

Please ensure that you have node installed on your machine, and then feel free to start generating your new password!

# Data Entry

Please be sure to read this document in its entirity and follow instructions from the --help command carefully. If any errors are detected in your data entry, they will be displayed in the console as such...

"Error: (your error)"

# Commands

--help

Display help menu.

--length

Provide a length for your password

--uppercase

Include uppercase characters in your password

--only-uppercase

Include strictly uppercase characters in your password

--symbols

Include symbols in your password

--numbers

Include numbers in your password

# Usage Sample

node index.js --length 5 --symbols --only-uppercase

# Security Concern!

Any passwords generated in the app will be visible in the terminal! Please be mindful of peering eyes 👀.
