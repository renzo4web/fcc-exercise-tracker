import { forwardRef, Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { FirebaseAdminService } from '../firebase-admin/firebase-admin.service';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService, FirebaseAdminService],
  exports: [ExerciseService],
})
export class ExerciseModule {}
