import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Team } from '../../teams/entities/team.entity';
import { PlayerMatchDay } from '../../player-match-day/entities/player-match-day.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  documento: string;

  @Column({ default: true })
  estado: boolean;

  @ManyToOne(() => Team, (team) => team.players)
  team: Team;

  @OneToMany(() => PlayerMatchDay, (pmd) => pmd.player)
  asistencias: PlayerMatchDay[];
}
