# Poll 
Node.js app created to make a database with sentiment of portuguese sentences through an online poll.

## Running locally 

### MySql
- Install [mysql](https://www.mysql.com/).
- Import the mapa-da-pressao-01 database.
- Update the connection information in `config/default.js`.

### Node.js
- Install [node.js](https://nodejs.org). 
- Run `npm install` to install all dependencies.
- Run `npm start` to start the server.
- Go to [localhost:8080](http://localhost:8080)

## Archictecture 
- `server.js`: main server file
- `/config`: stores the database connection credentials
- `/lib`: module responsible for the database queries
- `/public`: all the public assets, such as .css and .jpg files 
- `/routers`: single router that handles all root requests
- `/views`: the .ejs files that will be compiled into .html


