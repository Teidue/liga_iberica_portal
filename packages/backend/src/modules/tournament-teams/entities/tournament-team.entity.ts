import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tournament } from '../../tournaments/entities/tournament.entity';
import { Team } from '../../teams/entities/team.entity';
import { Payment } from '../../payments/entities/payment.entity';

@Entity()
export class TournamentTeam {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tournament, (t) => t.equipos)
  tournament: Tournament;

  @ManyToOne(() => Team, (team) => team.torneos)
  team: Team;

  @Column()
  montoInscripcion: number;

  @OneToMany(() => Payment, (p) => p.tournamentTeam)
  pagos: Payment[];
}
