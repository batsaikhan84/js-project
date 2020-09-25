# Javascript Project

This project is built for tracking user expenses and income. Based on the information the user entered, the application is able to provide some useful insight as well as it can visualize user data. Users can enter their data into a database by utilizing two forms: income and expenses. Also, users can save the data into a database through these forms. <br /> 
This application's backend is powered by Rails. It uses SQLite for its database. In order to effectively manage user data, databases are divided into three tables: user, expense, income. 

## Install

### Clone the repository

```shell
https://github.com/batsaikhan84/js-project.git
cd js-project
```
### Install dependencies

Using Bundler and NPM

```shell
bundle install
npm install
```
Please cd into backend directory to run bundle install. In order to avoid conflict with the frontend app that opens at http://localhost:3000 in the development mode  , choose port 3001:
```shell
rails s -p 3001
```
Please cd into frontend directory to get started with the frontend appliation. The first, install all the dependencies by running command above - 'npm install.'

```shell
npm start
```
This command will start the frontend application. It automatically opens at http://localhost:3000.

### Initialize the database
```shell
rails db:create db:migrate db:seed
```

### Ruby version
```shell
ruby -v
```
Version `ruby 2.6.2`

please install the ruby version 2.6.2 if it is different:

```shell
rbenv install 2.6.2
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

 
