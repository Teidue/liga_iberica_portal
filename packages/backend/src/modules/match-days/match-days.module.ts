import { Module } from '@nestjs/common';
import { MatchDay } from './entities/match-day.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MatchDay])],
  exports: [TypeOrmModule],
})
export class MatchDaysModule {}
