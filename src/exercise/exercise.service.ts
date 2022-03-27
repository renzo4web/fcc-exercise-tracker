import { Inject, Injectable } from '@nestjs/common';
import { FirebaseAdminService } from '../firebase-admin/firebase-admin.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExerciseService {
  @Inject()
  readonly firebaseAdminService: FirebaseAdminService;

  async create(createExerciseDto: CreateExerciseDto) {
    await this.firebaseAdminService
      .firestore()
      .collection('exercise')
      .add(createExerciseDto);
    return 'This action adds a new exercise';
  }

  findAll() {
    return `This action returns all exercise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
