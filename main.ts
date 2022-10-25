import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from './common/config/config.module';
import { ConfigService } from './common/config/config.service';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.select(ConfigModule).get(ConfigService, { strict: true });

  const options = new DocumentBuilder().setTitle(configService.appName).build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableCors({
    origin: ['*', 'http://localhost:8080'],
  });

  await app.listen(configService.port);

  const server = app.getHttpServer();
  const router = server._events.request._router;

  const availableRoutes: [] = router.stack
    .map((layer) => {
      if (layer.route) {
        return {
          route: {
            path: layer.route?.path,
            method: layer.route?.stack[0].method,
          },
        };
      }
    })
    .filter((item) => item !== undefined);
  console.log(availableRoutes);
}
bootstrap();
