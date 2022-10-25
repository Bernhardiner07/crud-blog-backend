import { NestFactory } from '@nestjs/core';
import { SeedModule } from './infrastructure/seed/seed.module';

async function seed() {
  const app = await NestFactory.createApplicationContext(SeedModule, {
    logger: console,
  });

  await app.close();
}

seed();
