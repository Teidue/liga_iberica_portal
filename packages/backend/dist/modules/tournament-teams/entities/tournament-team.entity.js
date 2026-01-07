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
exports.TournamentTeam = void 0;
const typeorm_1 = require("typeorm");
const tournament_entity_1 = require("../../tournaments/entities/tournament.entity");
const team_entity_1 = require("../../teams/entities/team.entity");
const payment_entity_1 = require("../../payments/entities/payment.entity");
let TournamentTeam = class TournamentTeam {
    id;
    tournament;
    team;
    montoInscripcion;
    pagos;
};
exports.TournamentTeam = TournamentTeam;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TournamentTeam.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tournament_entity_1.Tournament, (t) => t.equipos),
    __metadata("design:type", tournament_entity_1.Tournament)
], TournamentTeam.prototype, "tournament", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team, (team) => team.torneos),
    __metadata("design:type", team_entity_1.Team)
], TournamentTeam.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TournamentTeam.prototype, "montoInscripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payment_entity_1.Payment, (p) => p.tournamentTeam),
    __metadata("design:type", Array)
], TournamentTeam.prototype, "pagos", void 0);
exports.TournamentTeam = TournamentTeam = __decorate([
    (0, typeorm_1.Entity)()
], TournamentTeam);
//# sourceMappingURL=tournament-team.entity.js.map