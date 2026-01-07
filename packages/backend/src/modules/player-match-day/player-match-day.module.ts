import { Module } from '@nestjs/common';
import { PlayerMatchDay } from './entities/player-match-day.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerMatchDay])],
  exports: [TypeOrmModule],
})
export class PlayerMatchDayModule {}
