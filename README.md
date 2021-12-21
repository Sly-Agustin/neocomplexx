# neocomplexx
Basic proyect to familiarize with nodejs and express.

# Install
Make sure to have node installed, you can get it here `https://nodejs.org/en/download/`
Run `npm install` to install dependencies
Download the proyect, unzip it and it's ready to go.

# Usage
To use the API:
- ` $ npm run start `
- Enter the next URL or send a GET request in Postman to `"http://localhost:3000/health"`

To use access your local database:
- Use the env.sample file as template, create a .env file and fill with your database credentials
- ` $ npm run localDatabase` will show a successful database message if credentials were correct

To mount the database in docker it's required to have docker installed, if you don't have it download from here `https://docs.docker.com/engine/install/`
The database uses port 3306 to comunicate, which is usually the default port for MySQL, stop this service before trying to mount the docker database. In Windows this can be done with `net stop MySQL80`. In GNU/Linux `sudo /etc/init.d/mysql stop`.
- To start the database run `docker-compose up`
- Migrate tables to the database with `npm run migrateEverything`
- Upload placeholder data with `npm run seedEverything`

# Contributing
PRs accepted.

# License
MIT © Agustin Sly
