import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.DEVELOPMENT_MODE === 'TRUE') app.enableCors();

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
