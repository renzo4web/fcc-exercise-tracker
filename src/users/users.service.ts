import { Inject, Injectable } from '@nestjs/common';
import uniqid from 'uniqid';
import { FirebaseAdminService } from '../firebase-admin/firebase-admin.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  @Inject()
  readonly firebaseAdminService: FirebaseAdminService;

  async create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
      _id: uniqid(),
    };

    await this.firebaseAdminService.firestore().collection('users').add(user);

    return user;
  }

  async findAll() {
    return this.firebaseAdminService.getAllDocs('users');
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
