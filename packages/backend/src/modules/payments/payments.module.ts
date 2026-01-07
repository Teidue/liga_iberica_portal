import { Module } from '@nestjs/common';
import { Payment } from './entities/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  exports: [TypeOrmModule],
})
export class PaymentsModule {}
