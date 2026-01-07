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
exports.Tournament = void 0;
const typeorm_1 = require("typeorm");
const match_day_entity_1 = require("../../match-days/entities/match-day.entity");
const tournament_team_entity_1 = require("../../tournament-teams/entities/tournament-team.entity");
let Tournament = class Tournament {
    id;
    nombre;
    fechaInicio;
    fechaFin;
    jornadas;
    equipos;
};
exports.Tournament = Tournament;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tournament.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tournament.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Tournament.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Tournament.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => match_day_entity_1.MatchDay, (md) => md.tournament),
    __metadata("design:type", Array)
], Tournament.prototype, "jornadas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tournament_team_entity_1.TournamentTeam, (tt) => tt.tournament),
    __metadata("design:type", Array)
], Tournament.prototype, "equipos", void 0);
exports.Tournament = Tournament = __decorate([
    (0, typeorm_1.Entity)()
], Tournament);
//# sourceMappingURL=tournament.entity.js.map