"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const clubs_module_1 = require("./modules/clubs/clubs.module");
const guests_module_1 = require("./modules/guests/guests.module");
const match_days_module_1 = require("./modules/match-days/match-days.module");
const payments_module_1 = require("./modules/payments/payments.module");
const player_match_day_module_1 = require("./modules/player-match-day/player-match-day.module");
const players_module_1 = require("./modules/players/players.module");
const teams_module_1 = require("./modules/teams/teams.module");
const tournament_teams_module_1 = require("./modules/tournament-teams/tournament-teams.module");
const tournaments_module_1 = require("./modules/tournaments/tournaments.module");
const users_module_1 = require("./modules/users/users.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.NODE_ENV === 'production' ? 'ep-twilight-truth-a4fgvypc-pooler.us-east-1.aws.neon.tech' : (process.env.DB_HOST || 'localhost'),
                port: process.env.NODE_ENV === 'production' ? 5432 : (parseInt(process.env.DB_PORT || '5432') || 5432),
                username: process.env.NODE_ENV === 'production' ? 'neondb_owner' : (process.env.DB_USERNAME || 'postgres'),
                password: process.env.NODE_ENV === 'production' ? 'npg_oAShDzOj6H2s' : (process.env.DB_PASSWORD || 'tadeo123'),
                database: process.env.NODE_ENV === 'production' ? 'neondb' : (process.env.DB_DATABASE || 'liga_iberica_portal'),
                ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
                autoLoadEntities: true,
                synchronize: process.env.NODE_ENV === 'development',
            }),
            clubs_module_1.ClubsModule,
            guests_module_1.GuestsModule,
            match_days_module_1.MatchDaysModule,
            payments_module_1.PaymentsModule,
            player_match_day_module_1.PlayerMatchDayModule,
            players_module_1.PlayersModule,
            teams_module_1.TeamsModule,
            tournament_teams_module_1.TournamentTeamsModule,
            tournaments_module_1.TournamentsModule,
            users_module_1.UsersModule,
        ],
        controllers: [],
        providers: [],
        exports: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map