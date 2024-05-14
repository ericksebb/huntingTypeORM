import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
  );
  const appConfig = new DocumentBuilder()
    .setTitle('Creatures API')
    .setDescription('The creatures API description')
    .setVersion('1.0')
    .addTag('creatures')
    .build();
  const document = SwaggerModule.createDocument(app, appConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();