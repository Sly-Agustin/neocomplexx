# neocomplexx

Basic proyect to familiarize with nodejs and express.

# Install

Make sure to have node installed, you can get it here `https://nodejs.org/en/download/`
Run `npm install` to install dependencies and it's ready to go.

# Usage

To use the API:

-   `$ npm run start`
-   Enter the next URL or send a GET request in Postman to `"http://localhost:3000/health"`

Setting up the credentials and checking them:

-   Use the env.sample file as template, create a .env file and fill with your database credentials
-   ` $ npm run checkDatabaseConnection` will show a successful database message if credentials were correct
    <br /><br />

To mount the database in docker it's required to have docker installed, if you don't have it download from here `https://docs.docker.com/engine/install/`
The database uses port 3306 to communicate, which is usually the default port for MySQL, stop this service before trying to mount the docker database. In Windows this can be done with `net stop MySQL80`. In GNU/Linux `sudo /etc/init.d/mysql stop`.

-   To start the database run `docker-compose up`
-   Migrate tables to the database with `npm run migrateEverything`
-   Upload placeholder data with `npm run seedEverything`
    <br /><br />

All requests supported by the API right now:
-   Get health, returns the version and name of the project
-   Get all employees
-   Get an employee by ID
-   Create an employee

To be able to send requests:
-   Be sure to have docker and database up
-   Use Postman to send requests, import the file `Neocomplexx api.postman_collection.json`
    <br /><br />

# Contributing

PRs accepted.

# License

MIT © Agustin Sly
