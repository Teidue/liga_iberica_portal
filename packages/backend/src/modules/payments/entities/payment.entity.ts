import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TournamentTeam } from '../../tournament-teams/entities/tournament-team.entity';

export enum PaymentMethod {
  BINANCE = 'BINANCE',
  ZINLI = 'ZINLI',
  TRANSFERENCIA = 'TRANSFERENCIA',
  EFECTIVO = 'EFECTIVO',
  OTRO = 'OTRO',
}

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TournamentTeam, (tt) => tt.pagos)
  tournamentTeam: TournamentTeam;

  @Column()
  monto: number;

  @Column()
  fecha: Date;

  @Column({ type: 'enum', enum: PaymentMethod })
  metodo: PaymentMethod;

  @Column({ nullable: true })
  referencia: string;

  @Column({ nullable: true })
  imagen: string;

  @Column({ default: false })
  aprobado: boolean;
}
