# Coolelat

The educational website you never knew you needed

### Commit Message Guidelines

This repository aims to be Commitizen-friendly to which regard all commit messages *must* follow the [guide](https://www.npmjs.com/package/commitizen)

The steps needed to take within the context of this application are:

1. Go to root of the repository
2. Ensure update dependecies by running npm install
3. Instead of `git commit` when committing, use `cz` or `git cz` 
4. To use the cz commands in subfolders [ex. *client*, *server*], make sure to install cz locally through the `npm install -g commitizen`

## Migrations

1. Go to **/server** subfolder
2. Run `npx knex migrate:latest`

## Seeds

1. Go to **/server** subfolder
2. Run `npx knex seed:run`
