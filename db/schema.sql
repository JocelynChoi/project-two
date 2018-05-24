CREATE DATABASE myperfecthotel_db;
USE myperfecthotel_db;

CREATE TABLE users (
    id int NOT NULL auto_increment,
	username varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE places_of_interest (
    id int NOT NULL auto_increment,
	user_id int NOT NULL,
	city varchar(100) NOT NULL,
    state varchar(50) NOT NULL,
    country varchar(50) NOT NULL,
    lat FLOAT (10, 6) NOT NULL,
    lng FLOAT (10, 6) NOT NULL,
    category varchar(100) NOT NULL,
    recommendation varchar(100) NOT NULL,
	PRIMARY KEY (id)
);