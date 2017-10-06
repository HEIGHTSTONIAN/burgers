# MySQL-Burger

I created a burger logger app with MySQL, Node, Express, Handlebars and a homemade ORM. I followed the MVC design pattern; used Node and MySQL to query and route data in my app, and Handlebars to generated my HTML.

## How it works

Devour Burger is a restaurant app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, my app will display the burger on the left side of the page -- waiting to be devoured.

![1](https://user-images.githubusercontent.com/28790452/31296915-b3742fca-aaa9-11e7-9c1f-9bc0692887f6.gif)

Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

![2](https://user-images.githubusercontent.com/28790452/31296984-ef47d7a4-aaa9-11e7-9b17-1abbde5bee5a.gif)

The most important part of my app - every burger stores in a database, whether devoured or not.

Click [here](http://art-mysql-burger.herokuapp.com/) to see the app live.

## Project Installation

There are two methods to download the repository.

#### Method I: Familiar with Git?

Clone this repository, install dependencies, then run the project with the following:

```
> git clone git@github.com:artprofi91/MySQL-Burger.git
> cd MySQL-Burger
> npm install
> node server.js
> go to localhost:8080
```

#### Not Familiar with Git?

Click [here](https://github.com/artprofi91/MySQL-Burger) then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory and:

```
> npm install
> node server.js
> go to localhost:8080
```

#### Hint

Don't forget to change password in `connection.js`