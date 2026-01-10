import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  console.log('Starting NestJS application...');
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Database: ${process.env.DB_DATABASE || 'liga_iberica_portal'}`);
  console.log(`Port: ${port}`);

  await app.listen(port);

  console.log('✅ NestJS application started successfully!');
  console.log(`🌐 Server running on: http://localhost:${port}`);
  console.log(`📊 Health check: http://localhost:${port}/health`);
  console.log(`🗄️ Database check: http://localhost:${port}/health/database`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV}`);
  console.log(`🗃️ Database: ${process.env.DB_DATABASE}`);
}
void bootstrap();
