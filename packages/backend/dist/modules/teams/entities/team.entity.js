"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const player_entity_1 = require("../../players/entities/player.entity");
const tournament_team_entity_1 = require("../../tournament-teams/entities/tournament-team.entity");
let Team = class Team {
    id;
    nombre;
    admin;
    players;
    torneos;
};
exports.Team = Team;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Team.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Team.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.teamsManaged, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'adminId' }),
    __metadata("design:type", user_entity_1.User)
], Team.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => player_entity_1.Player, (player) => player.team),
    __metadata("design:type", Array)
], Team.prototype, "players", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tournament_team_entity_1.TournamentTeam, (tt) => tt.team),
    __metadata("design:type", Array)
], Team.prototype, "torneos", void 0);
exports.Team = Team = __decorate([
    (0, typeorm_1.Entity)()
], Team);
//# sourceMappingURL=team.entity.js.map