import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MatchDay } from '../../match-days/entities/match-day.entity';
import { TournamentTeam } from '../../tournament-teams/entities/tournament-team.entity';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @OneToMany(() => MatchDay, (md) => md.tournament)
  jornadas: MatchDay[];

  @OneToMany(() => TournamentTeam, (tt) => tt.tournament)
  equipos: TournamentTeam[];
}
