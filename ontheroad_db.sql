drop database if exists ontheroad;
create database ontheroad;
use ontheroad;

drop table if exists `regions`;
create table `regions` (
	`id` int not null auto_increment,
    `name` varchar(100) not null,
    primary key(`id`)
);

drop table if exists `category`;
create table `category`(
	`id` int not null auto_increment,
    `name` varchar(100) not null,
    primary key(`id`)
);

drop table if exists `users`;
create table `users` (
	`id` int unsigned NOT NULL auto_increment,
    `firstName` varchar(20) not null,
    `lastName` varchar(20) not null,
    `email` varchar(100) not null,
    `password` varchar(10) not null,
    `category_id` int not null,
    primary key(`id`),
    foreign key (category_id) references category(id)
);

drop table if exists `products`;
create table `products` (
	`id` int not null auto_increment,
    `name` varchar(100) not null,
    `price` decimal not null,
    `discount` int not null,
    `descriptionShort` varchar(500) not null,
    `descriptionLong` varchar(1000) not null,
    `image` varchar(100) not null,
    `regions_id` int not null,
    primary key(`id`),
    foreign key (regions_id) references regions(id)
);