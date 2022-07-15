# Electrify API
An API server for Electrify application. This project was built with Nest.js framework with basic configuration.
To get started, you can check out the commands below. You can also learn more about Nest.js on their [official documentation website](https://docs.nestjs.com/).


## Live demo
This App is deployed as a Docker container on Heroku.
You can check out the API Swagger docs here https://electrify-chargers.herokuapp.com/docs

## Installation

```bash
$ yarn
```


## Connecting to the database
This project requires a MongoDB instance. Before running the app you must define the environment variables
- `MONGO_URL` Full MongoDB URL with credentials.
- `DB_NAME` The name of your database.
> ⚠️️ **This project doesn't support `.env` files**

you need to manually define the env variables in your terminal
```bash
export MONGO_URL=mongodb+srv://... && DB_NAME=electrify
```


## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```