import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreaturesModule } from './creatures/creatures.module';
import { env } from 'process';

// When I used the properties from the process object, It kept giving me an error
// PLEASE DON'T DO THIS IN PRODUCTION AS IT IS COMPLETELY INSECURE 
// AND WILL LIKELY HAVE YOUR DATABASE DROPPED.

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host:  'roundhouse.proxy.rlwy.net',
    port: 28873,
    username: 'postgres',
    password: 'WIaJyQXKQYFkzcaRgZYCQkCmtopIUpqZ',
    database: 'railway',   
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    url: env.DATABASE_URL,
    logging: false
  }), CreaturesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
