import { Module } from '@nestjs/common';
import * as path from 'path';
import {
  AcceptLanguageResolver,
  I18nJsonLoader,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { Docs } from './Docs/entities/Docs.entity';
import { CategoryModule } from './category/category.module';
import { DocsModule } from './Docs/Docs.module';
import { FlightModule } from './flight/flight.module';
import { Flight } from './flight/entities/flight.entity';
import { SeatModule } from './seat/seat.module';
import { Seat } from './seat/entities/seat.entity';
import { SupplierModule } from './supplier/supplier.module';
import { Supplier } from './supplier/entities/supplier.entity';
import { SeatToSeat } from './seat/entities/SeatToSeat.entity';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: './src/i18n/',
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db-mysql-sfo3-55643-do-user-9120615-0.b.db.ondigitalocean.com',
      port: 25060,
      username: 'doadmin',
      password: 'AVNS_vPJjdBFePeawLu5rHmC',
      database: 'defaultdb',

      // username: 'root',
      // port: 3306,
      // host: 'localhost',
      // database: 'flight',
      // password: '',

      entities: [User, Docs, Flight, Seat, SeatToSeat, Supplier],
      synchronize: true,
    }),
    UsersModule,
    DocsModule,
    FlightModule,
    SeatModule,
    SupplierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
