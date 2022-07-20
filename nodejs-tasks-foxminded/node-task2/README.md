# node-task2 (verify environment)

### Task : Write Node.js script what will check that environment has docker, git, npm, nvm and node.js. For every tool write to stdout the tool version. If some tools doesn't exist write to stderr message about it and finish process with right exit code.

#### Solution : firstly, imported util module because I wanted to acces util module functions for example util.promisify, I used this to convert a method that returns responses using a callback function to return responses in a promise object. also used child_process module to access exec function. after that, I made async function with argument to handle environment string. 
