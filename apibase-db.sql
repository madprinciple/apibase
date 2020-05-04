DROP TABLE IF EXISTS users;
CREATE TABLE users (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
INSERT INTO users
VALUES (001, 'Anton', 'Sriyantha', 'blk221', 'Singapore');