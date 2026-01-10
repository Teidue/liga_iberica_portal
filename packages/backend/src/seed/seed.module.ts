import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { User } from '../modules/users/entities/user.entity';
import { Club } from '../modules/clubs/entities/club.entity';
import { Tournament } from '../modules/tournaments/entities/tournament.entity';
import { Team } from '../modules/teams/entities/team.entity';
import { Player } from '../modules/players/entities/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Club, Tournament, Team, Player])],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
