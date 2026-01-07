"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchDaysModule = void 0;
const common_1 = require("@nestjs/common");
const match_day_entity_1 = require("./entities/match-day.entity");
const typeorm_1 = require("@nestjs/typeorm");
let MatchDaysModule = class MatchDaysModule {
};
exports.MatchDaysModule = MatchDaysModule;
exports.MatchDaysModule = MatchDaysModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([match_day_entity_1.MatchDay])],
        exports: [typeorm_1.TypeOrmModule],
    })
], MatchDaysModule);
//# sourceMappingURL=match-days.module.js.map