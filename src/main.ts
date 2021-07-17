import { ValidationPipe } from '@nestjs/common';
import { ApplicationContext } from './app.context';

async function bootstrap() {
  const app = await ApplicationContext();
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('v1');
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
}
bootstrap();
