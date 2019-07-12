// const Sequelize = require('sequelize');
// const config = require('./config');
import sequelize  from 'sequelize';
import config from './config';
import { create } from 'domain';

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});


use test;
create table petscopy(
    id varchar(50) not null,
    name varchar(100) not null,
    gender bool not null,
    birth varchar(10) not null,
    createAt bigint not null,
    updateAt bigint not null,
    version bigint not null,
    primary key(id)
) engine=innodb;