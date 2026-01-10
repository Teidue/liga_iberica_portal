import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from '../services/database.service';

@Controller('health')
export class HealthController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('database')
  async checkDatabase() {
    return this.databaseService.testConnection();
  }

  @Get()
  checkApp() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
    };
  }
}
