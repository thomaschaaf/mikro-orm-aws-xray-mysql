import { Configuration } from '@mikro-orm/core';
import { AbstractSqlDriver, MySqlPlatform } from '@mikro-orm/mysql-base';
import { MySQLConnection } from './MySQLConnection';

export class MySQLDriver extends AbstractSqlDriver<MySQLConnection> {

  constructor(config: Configuration) {
    super(config, new MySqlPlatform(), MySQLConnection, ['knex', 'mysql2']);
  }

}