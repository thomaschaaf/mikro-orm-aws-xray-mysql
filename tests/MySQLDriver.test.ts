const { MikroORM, EntitySchema } = require('@mikro-orm/core');
const { MySQLDriver } = require('../dist/MySQLDriver');

describe('', ()=> {
    it('should', async () => {
        const orm = await MikroORM.init({
            entities: [],
            discovery: {
                warnWhenNoEntities: false
            },
            dbName: 'mysql',
            driver: MySQLDriver,
            host : '127.0.0.1',
            user : 'root',
            password : 'secret',
          });

          expect((await orm.em.getConnection().getKnex().select(1))[0]['1']).toBe(1);
    })
})