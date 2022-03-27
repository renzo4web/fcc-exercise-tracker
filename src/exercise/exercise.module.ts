import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { FirebaseAdminService } from '../firebase-admin/firebase-admin.service';

@Module({
  controllers: [ExerciseController],
  providers: [ExerciseService, FirebaseAdminService],
})
export class ExerciseModule {}
