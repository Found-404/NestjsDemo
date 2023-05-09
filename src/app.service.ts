import { Injectable } from '@nestjs/common';

// 具有单一方法的基本服务(Service)

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
