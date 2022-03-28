import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { FirebaseAdminService } from '../firebase-admin/firebase-admin.service';
import { ExerciseService } from '../exercise/exercise.service';
import { ExerciseModule } from '../exercise/exercise.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, FirebaseAdminService, ExerciseService],
  exports: [UsersService],
})
export class UsersModule {}
