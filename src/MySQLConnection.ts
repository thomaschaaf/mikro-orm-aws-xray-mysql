import captureMySQL from 'aws-xray-sdk-mysql';
import { MySqlConnection as MySqlBaseConnection, MonkeyPatchable } from '@mikro-orm/mysql-base';
import mysql2 from 'mysql2';

// https://github.com/aws/aws-xray-sdk-node/issues/387
// @ts-ignore
const mysql = captureMySQL(mysql2);

export class MySQLConnection extends MySqlBaseConnection {

  async connect(): Promise<void> {
    this.client = this.createKnexClient(this.getPatchedDialect());
  }

  private getPatchedDialect() {
    const { MySqlDialect } = MonkeyPatchable;
    MySqlDialect.prototype._driver = () => mysql;

    return MySqlDialect;
  }

}