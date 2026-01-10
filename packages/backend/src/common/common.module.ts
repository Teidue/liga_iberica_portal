import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../modules/users/entities/user.entity';
import { DatabaseService } from './services/database.service';
import { HealthController } from './controllers/health.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [HealthController],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class CommonModule {}
