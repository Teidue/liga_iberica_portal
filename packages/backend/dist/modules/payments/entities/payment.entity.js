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
exports.Payment = exports.PaymentMethod = void 0;
const typeorm_1 = require("typeorm");
const tournament_team_entity_1 = require("../../tournament-teams/entities/tournament-team.entity");
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["BINANCE"] = "BINANCE";
    PaymentMethod["ZINLI"] = "ZINLI";
    PaymentMethod["TRANSFERENCIA"] = "TRANSFERENCIA";
    PaymentMethod["EFECTIVO"] = "EFECTIVO";
    PaymentMethod["OTRO"] = "OTRO";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
let Payment = class Payment {
    id;
    tournamentTeam;
    monto;
    fecha;
    metodo;
    referencia;
    imagen;
    aprobado;
};
exports.Payment = Payment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tournament_team_entity_1.TournamentTeam, (tt) => tt.pagos),
    __metadata("design:type", tournament_team_entity_1.TournamentTeam)
], Payment.prototype, "tournamentTeam", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Payment.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Payment.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: PaymentMethod }),
    __metadata("design:type", String)
], Payment.prototype, "metodo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "referencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "imagen", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Payment.prototype, "aprobado", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)()
], Payment);
//# sourceMappingURL=payment.entity.js.map