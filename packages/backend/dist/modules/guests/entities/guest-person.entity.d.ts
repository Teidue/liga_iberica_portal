import { PlayerMatchDay } from '../../player-match-day/entities/player-match-day.entity';
export declare class GuestPerson {
    id: number;
    nombre: string;
    documento: string;
    notas: string;
    asistencias: PlayerMatchDay[];
}
