import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const configSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('CAM_CMS_Web')
    .setDescription('Restful API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};
