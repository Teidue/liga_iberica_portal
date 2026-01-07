import { MatchDay } from '../../match-days/entities/match-day.entity';
export declare class Club {
    id: number;
    nombre: string;
    direccion: string;
    formatoExcel: any;
    jornadas: MatchDay[];
}
