import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../modules/users/entities/user.entity';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async testConnection(): Promise<{
    status: string;
    database: string;
    environment: string;
    userCount?: number;
    error?: string;
  }> {
    try {
      const count = await this.userRepository.count();
      return {
        status: 'connected',
        database: process.env.DB_DATABASE || 'unknown',
        environment: process.env.NODE_ENV || 'unknown',
        userCount: count,
      };
    } catch (error) {
      return {
        status: 'error',
        database: process.env.DB_DATABASE || 'unknown',
        environment: process.env.NODE_ENV || 'unknown',
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }
}
