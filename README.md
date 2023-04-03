# Sections
- [Sections](#sections)
- [The Complete 2022 Web Development Bootcamp](#the-complete-2022-web-development-bootcamp)
- [Node modules](#node-modules)
- [Software Installation (On Windows 10)](#software-installation-on-windows-10)
  - [Mongo DB](#mongo-db)
  - [Mongo shell](#mongo-shell)
  - [Add mongo to git bash](#add-mongo-to-git-bash)
    - [Add to environment Path](#add-to-environment-path)


# The Complete 2022 Web Development Bootcamp

My follow up of [Dr. Angela Yu's Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)

# Node modules
To install the node modules from a `package.json` file, just run
```
npm i
```
# Software Installation (On Windows 10)
## Mongo DB
1. Download the community version from [here](https://www.mongodb.com/try/download/community). 
2. Install the software.
## Mongo shell
1. Download [MongoDB Shell](https://www.mongodb.com/try/download/shell?jmp=docs)
2. Extract and copy it to ``C:\Program Files`

## Add mongo to git bash
Create the file `~/.bash_profile` and write:
```
alias mongod="C:/Program\ files/MongoDB/Server/6.0/bin/mongod.exe"
alias mongos="C:/Program\ files/MongoDB/Server/6.0/bin/mongos.exe"
alias mongosh="C:/Program\ Files/mongosh-1.8.0-win32-x64/bin/mongosh.exe"
``` 
### Add to environment Path
This is useful to use it from powershell or command prompt. [Follow this guide](https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12385746#questions/18110616)