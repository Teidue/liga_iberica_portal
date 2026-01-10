import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  User,
  UserRole,
  UserWithoutPassword,
} from '../modules/users/entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserWithoutPassword | null> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      return {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
      };
    }

    return null;
  }

  login(user: UserWithoutPassword) {
    const payload = {
      email: user.email,
      sub: user.id,
      rol: user.rol,
      nombre: user.nombre,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        nombre: user.nombre,
        rol: user.rol,
      },
    };
  }

  async register(userData: {
    nombre: string;
    email: string;
    password: string;
    rol: UserRole;
  }) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = {
      nombre: userData.nombre,
      email: userData.email,
      password: hashedPassword,
      rol: userData.rol,
    };

    const savedUser = await this.userRepository.save(newUser);

    return {
      id: savedUser.id,
      nombre: savedUser.nombre,
      email: savedUser.email,
      rol: savedUser.rol,
    };
  }
}
