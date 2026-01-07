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
exports.MatchDay = void 0;
const typeorm_1 = require("typeorm");
const tournament_entity_1 = require("../../tournaments/entities/tournament.entity");
const club_entity_1 = require("../../clubs/entities/club.entity");
const player_match_day_entity_1 = require("../../player-match-day/entities/player-match-day.entity");
let MatchDay = class MatchDay {
    id;
    fecha;
    tournament;
    club;
    asistencias;
};
exports.MatchDay = MatchDay;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MatchDay.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], MatchDay.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tournament_entity_1.Tournament, (t) => t.jornadas),
    __metadata("design:type", tournament_entity_1.Tournament)
], MatchDay.prototype, "tournament", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => club_entity_1.Club, (c) => c.jornadas),
    __metadata("design:type", club_entity_1.Club)
], MatchDay.prototype, "club", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => player_match_day_entity_1.PlayerMatchDay, (pmd) => pmd.matchDay),
    __metadata("design:type", Array)
], MatchDay.prototype, "asistencias", void 0);
exports.MatchDay = MatchDay = __decorate([
    (0, typeorm_1.Entity)()
], MatchDay);
//# sourceMappingURL=match-day.entity.js.map