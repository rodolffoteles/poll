# Poll
Node.js app created to make a database with sentiment of portuguese sentences through an online poll.

## Running locally

- Install [docker engine](https://docs.docker.com/install/) and [docker compose](https://docs.docker.com/compose/install/).
- Run `docker-compose up`
- Go to [localhost:8080](http://localhost:8080)

## Archictecture
- `app.js`: server entry point
- `/config`: stores the database connection credentials
- `/lib`: module responsible for the database queries
- `/public`: all the public assets, such as .css and .jpg files
- `/routers`: single router that handles all root requests
- `/views`: the .ejs files that will be compiled into .html
