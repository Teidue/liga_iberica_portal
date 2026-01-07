import { TournamentTeam } from '../../tournament-teams/entities/tournament-team.entity';
export declare enum PaymentMethod {
    BINANCE = "BINANCE",
    ZINLI = "ZINLI",
    TRANSFERENCIA = "TRANSFERENCIA",
    EFECTIVO = "EFECTIVO",
    OTRO = "OTRO"
}
export declare class Payment {
    id: number;
    tournamentTeam: TournamentTeam;
    monto: number;
    fecha: Date;
    metodo: PaymentMethod;
    referencia: string;
    imagen: string;
    aprobado: boolean;
}
