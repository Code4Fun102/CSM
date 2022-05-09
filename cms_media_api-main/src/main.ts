import { NestFactory } from '@nestjs/core';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { MikroORM } from '@mikro-orm/core';
import { AppModule } from './app.module';
import { configSwagger } from './swagger';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.enableVersioning({
    type: VersioningType.URI,
  });
  configSwagger(app);
  // await app.get(MikroORM).getSchemaGenerator().ensureDatabase();
  // await app.get(MikroORM).getSchemaGenerator().dropSchema();
  // await app.get(MikroORM).getSchemaGenerator().updateSchema();
  await app.listen(3000);
})();
