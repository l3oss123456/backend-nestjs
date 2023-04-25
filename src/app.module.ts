import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { UsersModule } from './users/users.module';
// import SequelizeConnection from './configs/connection/sequelize';
import { databaseProviders } from './configs/connection/sequelize';
import { LoginModule } from './login/login.module';

@Module({
  // imports: [SequelizeConnection, ProductModule, UsersModule],
  imports: [ProductModule, UsersModule, LoginModule],
  controllers: [AppController],
  providers: [...databaseProviders, AppService],
  exports: [...databaseProviders],
})
export class AppModule {}
