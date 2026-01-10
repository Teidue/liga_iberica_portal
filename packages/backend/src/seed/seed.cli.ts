import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { SeedService } from '../seed/seed.service';

async function runSeeds() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seedService = app.get(SeedService);

  await seedService.seedAll();

  await app.close();
  process.exit(0);
}

runSeeds().catch((error) => {
  console.error('❌ Seeding failed:', error);
  process.exit(1);
});
