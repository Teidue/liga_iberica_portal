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

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.NODE_ENV === 'production' ? 'ep-twilight-truth-a4fgvypc-pooler.us-east-1.aws.neon.tech' : (process.env.DB_HOST || 'localhost'),
      port: process.env.NODE_ENV === 'production' ? 5432 : (parseInt(process.env.DB_PORT || '5432') || 5432),
      username: process.env.NODE_ENV === 'production' ? 'neondb_owner' : (process.env.DB_USERNAME || 'postgres'),
      password: process.env.NODE_ENV === 'production' ? 'npg_oAShDzOj6H2s' : (process.env.DB_PASSWORD || 'tadeo123'),
      database: process.env.NODE_ENV === 'production' ? 'neondb' : (process.env.DB_DATABASE || 'liga_iberica_portal'),
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV === 'development', // SOLO en desarrollo
      // dropSchema: true, // SOLO en desarrollo. Cuidado en producción.
    }),
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
