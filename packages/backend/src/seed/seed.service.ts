import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from '../modules/users/entities/user.entity';
import { Club } from '../modules/clubs/entities/club.entity';
import { Tournament } from '../modules/tournaments/entities/tournament.entity';
import { Team } from '../modules/teams/entities/team.entity';
import { Player } from '../modules/players/entities/player.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Club)
    private readonly clubRepository: Repository<Club>,
    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async seedAll() {
    console.log('🌱 Starting database seeding...');

    // 1. Create Super Admin
    await this.createSuperAdmin();

    // 2. Create Team Admins
    const teamAdmins = await this.createTeamAdmins();

    // 3. Create Clubs
    await this.createClubs();

    // 4. Create Tournament
    await this.createTournament();

    // 5. Create Teams
    const teams = await this.createTeams(teamAdmins);

    // 6. Create Players
    await this.createPlayers(teams);

    console.log('✅ Database seeding completed!');
  }

  private async createSuperAdmin(): Promise<User> {
    const existingSuperAdmin = await this.userRepository.findOne({
      where: { email: 'admin@ligaiberica.com' },
    });

    if (existingSuperAdmin) {
      console.log('👤 Super admin already exists');
      return existingSuperAdmin;
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    const superAdmin = this.userRepository.create({
      nombre: 'Super Admin',
      email: 'admin@ligaiberica.com',
      password: hashedPassword,
      rol: UserRole.SUPER_ADMIN,
    });

    const savedAdmin = await this.userRepository.save(superAdmin);
    console.log('👤 Created super admin: admin@ligaiberica.com');
    return savedAdmin;
  }

  private async createTeamAdmins(): Promise<User[]> {
    const teamAdminsData = [
      {
        nombre: 'Carlos Rodríguez',
        email: 'carlos@ligaiberica.com',
        password: 'team123',
        rol: UserRole.TEAM_ADMIN,
      },
      {
        nombre: 'María García',
        email: 'maria@ligaiberica.com',
        password: 'team123',
        rol: UserRole.TEAM_ADMIN,
      },
      {
        nombre: 'Luis Martínez',
        email: 'luis@ligaiberica.com',
        password: 'team123',
        rol: UserRole.TEAM_ADMIN,
      },
    ];

    const teamAdmins: User[] = [];

    for (const adminData of teamAdminsData) {
      const existing = await this.userRepository.findOne({
        where: { email: adminData.email },
      });

      if (!existing) {
        const hashedPassword = await bcrypt.hash(adminData.password, 10);
        const admin = this.userRepository.create({
          ...adminData,
          password: hashedPassword,
        });
        const saved = await this.userRepository.save(admin);
        teamAdmins.push(saved);
        console.log(`👤 Created team admin: ${adminData.email}`);
      } else {
        teamAdmins.push(existing);
      }
    }

    return teamAdmins;
  }

  private async createClubs(): Promise<Club[]> {
    const clubsData = [
      {
        nombre: 'Club Deportivo Central',
        direccion: 'Av. Principal 123, Buenos Aires',
      },
      {
        nombre: 'Club Atlético Norte',
        direccion: 'Ruta 9 km 45, Córdoba',
      },
      {
        nombre: 'Club Unión Deportiva',
        dirección: 'Calle Sport 789, Rosario',
      },
    ];

    const clubs: Club[] = [];

    for (const clubData of clubsData) {
      const existing = await this.clubRepository.findOne({
        where: { nombre: clubData.nombre },
      });

      if (!existing) {
        const club = this.clubRepository.create(clubData);
        const saved = await this.clubRepository.save(club);
        clubs.push(saved);
        console.log(`🏢 Created club: ${clubData.nombre}`);
      } else {
        clubs.push(existing);
      }
    }

    return clubs;
  }

  private async createTournament(): Promise<Tournament> {
    const existing = await this.tournamentRepository.findOne({
      where: { nombre: 'Liga Ibérica 2024' },
    });

    if (existing) {
      console.log('🏆 Tournament already exists');
      return existing;
    }

    const tournament = this.tournamentRepository.create({
      nombre: 'Liga Ibérica 2024',
      fechaInicio: new Date('2024-03-01'),
      fechaFin: new Date('2024-12-15'),
    });

    const saved = await this.tournamentRepository.save(tournament);
    console.log('🏆 Created tournament: Liga Ibérica 2024');
    return saved;
  }

  private async createTeams(teamAdmins: User[]): Promise<Team[]> {
    const teamsData = [
      { nombre: 'Tigres del Norte', admin: teamAdmins[0] },
      { nombre: 'Leones Central', admin: teamAdmins[1] },
      { nombre: 'Águilas Unión', admin: teamAdmins[2] },
    ];

    const teams: Team[] = [];

    for (const teamData of teamsData) {
      const existing = await this.teamRepository.findOne({
        where: { nombre: teamData.nombre },
      });

      if (!existing) {
        const team = this.teamRepository.create(teamData);
        const saved = await this.teamRepository.save(team);
        teams.push(saved);
        console.log(`⚽ Created team: ${teamData.nombre}`);
      } else {
        teams.push(existing);
      }
    }

    return teams;
  }

  private async createPlayers(teams: Team[]) {
    const playersData = [
      // Tigres del Norte
      { nombre: 'Juan Pérez', documento: '12345678', teamId: teams[0].id },
      { nombre: 'Roberto Silva', documento: '23456789', teamId: teams[0].id },
      { nombre: 'Diego González', documento: '34567890', teamId: teams[0].id },

      // Leones Central
      { nombre: 'Carlos López', documento: '45678901', teamId: teams[1].id },
      {
        nombre: 'Martín Fernández',
        documento: '56789012',
        teamId: teams[1].id,
      },
      { nombre: 'Pablo Rodríguez', documento: '67890123', teamId: teams[1].id },

      // Águilas Unión
      { nombre: 'Javier Gómez', documento: '78901234', teamId: teams[2].id },
      { nombre: 'Santiago Díaz', documento: '89012345', teamId: teams[2].id },
      { nombre: 'Andrés Martínez', documento: '90123456', teamId: teams[2].id },
    ];

    for (const playerData of playersData) {
      const existing = await this.playerRepository.findOne({
        where: { documento: playerData.documento },
      });

      if (!existing) {
        const player = this.playerRepository.create({
          nombre: playerData.nombre,
          documento: playerData.documento,
          estado: 'activo',
          team: { id: playerData.teamId },
        });
        await this.playerRepository.save(player);
        console.log(`👤 Created player: ${playerData.nombre}`);
      }
    }
  }
}
