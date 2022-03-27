import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { FirebaseAdminService } from '../firebase-admin/firebase-admin.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, FirebaseAdminService],
})
export class UsersModule {}
