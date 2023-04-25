import { SequelizeModule } from '@nestjs/sequelize';
import configs from '..';

export default SequelizeModule.forRoot({
  dialect: 'mysql',
  host: configs.db_host,
  port: configs.db_port,
  username: configs.db_username,
  password: configs.db_password,
  database: configs.db_name,
  models: [],
  // autoLoadModels: true,
});

import { Sequelize } from 'sequelize-typescript';
// import { Cat } from '../cats/cat.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: configs.db_host,
        port: configs.db_port,
        username: configs.db_username,
        password: configs.db_password,
        database: configs.db_name,
      });
      // sequelize.addModels([Cat]);
      await sequelize.sync();
      sequelize
        .authenticate()
        .then(() => {
          console.log('Database connected!');
        })
        .catch((err) => {
          console.log('Error: ', err);
          return;
        });
      return sequelize;
    },
  },
];
