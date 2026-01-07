import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Player } from '../../players/entities/player.entity';
import { TournamentTeam } from '../../tournament-teams/entities/tournament-team.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => User, (user) => user.teamsManaged, { nullable: true })
  @JoinColumn({ name: 'adminId' })
  admin: User;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];

  @OneToMany(() => TournamentTeam, (tt) => tt.team)
  torneos: TournamentTeam[];
}
