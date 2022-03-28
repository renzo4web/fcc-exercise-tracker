import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import uniqid from 'uniqid';
import { FirebaseAdminService } from '../firebase-admin/firebase-admin.service';
import { UsersService } from '../users/users.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExerciseService {
  @Inject()
  readonly firebaseAdminService: FirebaseAdminService;

  //@Inject()
  //readonly usersService: UsersService;

  async create(createExerciseDto: any) {
    const userRef = await this.firebaseAdminService
      .firestore()
      .collection('users')
      .where('_id', '==', createExerciseDto._id)
      .get();

    const docRef = userRef.docs.map((doc) => doc.data());

    if (!docRef || docRef.length === 0) {
      throw new NotFoundException('user not found');
    }

    const data: CreateExerciseDto = {
      ...createExerciseDto,
      date: !!createExerciseDto?.date
        ? createExerciseDto.date
        : new Date().toDateString(),
      _id: docRef[0]._id,
    };

    await this.firebaseAdminService
      .firestore()
      .collection(`exercise`)
      .add(data);

    return {
      ...data,
      username: docRef[0].username,
    };
  }

  async findAll() {
    return await this.firebaseAdminService.getAllDocs('exercise');
  }

  async findOne(id: string) {
    const userRef = await this.firebaseAdminService
      .firestore()
      .collection('exercise')
      .where('_id', '==', id)
      .get();

    return userRef.docs.map((doc) => doc.data());
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
