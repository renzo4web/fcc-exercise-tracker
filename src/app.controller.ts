import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { firebaseAdminApp } from './helpers/firebase.service';

@Controller()
export class AppController {
  @Inject()
  private readonly appService: AppService;

  @Post()
  async getHello(@Body() body: any): Promise<any> {
    //return this.appService.getHello();
    return body;
  }
}
