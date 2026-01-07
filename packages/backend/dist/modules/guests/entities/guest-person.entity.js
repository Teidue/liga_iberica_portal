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
exports.GuestPerson = void 0;
const typeorm_1 = require("typeorm");
const player_match_day_entity_1 = require("../../player-match-day/entities/player-match-day.entity");
let GuestPerson = class GuestPerson {
    id;
    nombre;
    documento;
    notas;
    asistencias;
};
exports.GuestPerson = GuestPerson;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GuestPerson.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GuestPerson.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], GuestPerson.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GuestPerson.prototype, "notas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => player_match_day_entity_1.PlayerMatchDay, (pmd) => pmd.invitado),
    __metadata("design:type", Array)
], GuestPerson.prototype, "asistencias", void 0);
exports.GuestPerson = GuestPerson = __decorate([
    (0, typeorm_1.Entity)()
], GuestPerson);
//# sourceMappingURL=guest-person.entity.js.map