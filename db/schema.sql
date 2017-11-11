-- create the database at the first time
CREATE DATABASE IF NOT EXISTS burgers_db;

-- use the "burgers_db" database
USE burgers_db;

-- create the table at the first time
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);
