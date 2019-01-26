# SB3 JSON Asset Reader
## What is this?
This repository gives you a tool to download assets from an SB3 JSON file to be zipped up with an SB3 JSON file in the future to convert your Scratch 3.0 projects to 2.0

## Requirements
- Node.js
- Python 3
- Bash (native on Linux; recommend Git Bash for Windows)

## How does this work?
This project works by using a unique package manager to merge files in the lib folder to create lib.js which contains all libraries needed for the Node.js part to function. To build, you just need to run build.py and it will use manifest.json to merge the files. An src folder is currently in development and will allow the full function of the SB3 JSON Asset Reader with JSON-reading capabilities to allow the files to be easily read and downloaded. Also, to decrease complexity in the HTTP requests, I used the curl function in Bash to write the file to download to a file automatically.
