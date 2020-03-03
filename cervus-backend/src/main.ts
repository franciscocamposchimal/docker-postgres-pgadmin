import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    preflightContinue: true,
    optionsSuccessStatus: 204,
    credentials: true,
  };

  app.enableCors(options)
  app.use(cookieParser());
  await app.listen(3000);

}
bootstrap();
