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
exports.PlayerMatchDay = void 0;
const typeorm_1 = require("typeorm");
const player_entity_1 = require("../../players/entities/player.entity");
const match_day_entity_1 = require("../../match-days/entities/match-day.entity");
const guest_person_entity_1 = require("../../guests/entities/guest-person.entity");
let PlayerMatchDay = class PlayerMatchDay {
    id;
    player;
    matchDay;
    va;
    invitado;
};
exports.PlayerMatchDay = PlayerMatchDay;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PlayerMatchDay.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => player_entity_1.Player, (p) => p.asistencias),
    __metadata("design:type", player_entity_1.Player)
], PlayerMatchDay.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => match_day_entity_1.MatchDay, (md) => md.asistencias),
    __metadata("design:type", match_day_entity_1.MatchDay)
], PlayerMatchDay.prototype, "matchDay", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], PlayerMatchDay.prototype, "va", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => guest_person_entity_1.GuestPerson, (g) => g.asistencias, { nullable: true }),
    __metadata("design:type", guest_person_entity_1.GuestPerson)
], PlayerMatchDay.prototype, "invitado", void 0);
exports.PlayerMatchDay = PlayerMatchDay = __decorate([
    (0, typeorm_1.Unique)(['player', 'matchDay']),
    (0, typeorm_1.Entity)()
], PlayerMatchDay);
//# sourceMappingURL=player-match-day.entity.js.map