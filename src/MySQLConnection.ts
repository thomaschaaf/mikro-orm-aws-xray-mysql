import { MySqlConnection as MySqlBaseConnection } from '@mikro-orm/mysql-base';
import MySqlDialect from 'knex-aws-xray-mysql2';

export class MySQLConnection extends MySqlBaseConnection {

  async connect(): Promise<void> {
    this.client = this.createKnexClient(MySqlDialect);
  }

}