import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Add this import
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreaturesModule } from './creatures/creatures.module';

//  Vulnerability has been fixed, now we can rest easy until someone
//  decides to do an SQL injection.
@Module({
  imports: [
    ConfigModule.forRoot(), // Add this line
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT),
      username: process.env.PGUSERNAME,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      url: process.env.DATABASE_URL,
      logging: false
    }),
    CreaturesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
// })
// export class AppModule {}
//   imports: [TypeOrmModule.forRoot({
//     type: 'postgres',
//     host: process.env.PGHOST,
//     port: parseInt(process.env.PGPORT),
//     username: process.env.PGUSERNAME,
//     password: process.env.PGPASSWORD,
//     database: process.env.PGDATABASE,
//     entities: ['dist/**/*.entity{.ts,.js}'],
//     synchronize: true,
//     url: process.env.DATABASE_URL,
//     logging: false
//   }), CreaturesModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
