import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  nombre: string;
  email: string;
  password: string;
  rol: UserRole;
}

export class UpdateUserDto {
  nombre?: string;
  email?: string;
  password?: string;
  rol?: UserRole;
}
