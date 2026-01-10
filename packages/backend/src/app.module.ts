import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { SeedModule } from './seed/seed.module';
import { ClubsModule } from './modules/clubs/clubs.module';
import { GuestsModule } from './modules/guests/guests.module';
import { MatchDaysModule } from './modules/match-days/match-days.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { PlayerMatchDayModule } from './modules/player-match-day/player-match-day.module';
import { PlayersModule } from './modules/players/players.module';
import { TeamsModule } from './modules/teams/teams.module';
import { TournamentTeamsModule } from './modules/tournament-teams/tournament-teams.module';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'tadeo123',
      database: process.env.DB_DATABASE || 'liga_iberica_portal',
      ssl:
        process.env.NODE_ENV === 'production'
          ? {
              rejectUnauthorized: false,
            }
          : false,
      autoLoadEntities: true,
      synchronize: false,
      migrations: ['dist/migrations/*.js'],
      migrationsRun: process.env.NODE_ENV === 'production',
    }),
    AuthModule,
    CommonModule,
    SeedModule,
    ClubsModule,
    GuestsModule,
    MatchDaysModule,
    PaymentsModule,
    PlayerMatchDayModule,
    PlayersModule,
    TeamsModule,
    TournamentTeamsModule,
    TournamentsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
