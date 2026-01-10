import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from '../../teams/entities/team.entity';

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  TEAM_ADMIN = 'TEAM_ADMIN',
}

export interface UserWithoutPassword {
  id: number;
  nombre: string;
  email: string;
  rol: UserRole;
}

export interface JwtPayload {
  email: string;
  sub: number;
  rol: UserRole;
  nombre: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole })
  rol: UserRole;

  @OneToMany(() => Team, (team) => team.admin)
  teamsManaged: Team[];
}
