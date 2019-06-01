# Poll
Node.js app created to collect sentiment data from portuguese sentences through an online poll.
<p align="center">
  <img src="/app/public/images/screen-capture.gif" width="207" height="350"> 
</p>

## Running locally
- Install [docker engine](https://docs.docker.com/install/) and [docker compose](https://docs.docker.com/compose/install/).
- Run `docker-compose up`
- Go to [localhost:8080](http://localhost:8080)

## Archictecture
The app runs in two different docker containers, one for the node web server and other for the mysql database. Each container run the code in their respective directories, `/app` and `/db`.

### Node
- `app.js`: server entry point
- `/config`: stores the database connection credentials
- `/lib`: module responsible for the database queries
- `/public`: all the public assets, such as .css and .jpg files
- `/routers`: single router that handles all root requests
- `/views`: the .ejs files that will be compiled into .html

### Mysql
- `setup.sql`: script which creates the tables with data sample