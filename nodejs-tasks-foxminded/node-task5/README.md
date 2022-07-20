# Сalculate md5 of file using npm modules

**Task :**
**1. Write script which will take a file path as argument and calculate md5 hash for it content using npm package what you will chose.**
**2. Find package for functionality for subtask 2 what can be used with npm exec command. Write at readme.md example of usage.**

**Solution : Firstly I imported node modules and md5 module with npm package. Secondly I make async function and inside it validate CLI arguments length after it I used file system name like fs and its method readFileSync to read Text.txt file. and calculate string to md5 with md5 package.**

**Example : try this command in command line --> npm exec md5-file text.txt and You will see result**
