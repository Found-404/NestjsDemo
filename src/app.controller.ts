import { Controller, Get, Query, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

// 单个路由的基本控制器(Controller)

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 1. 固定路径：
  // 可以匹配到 get请求，http://localhost:3000/app/list
  @Get('list')
  getHello(): string {
    return 'hello world';
  }

  // 可以匹配到 post请求，http://localhost:3000/app/list
  @Post('list')
  create(): string {
    return 'list';
  }

  // 2.通配符路径(?+* 三种通配符 )
  // 可以匹配到 get请求, http://localhost:3000/app/user_xxx
  @Get('user_*')
  getUser() {
    return 'getUser';
  }

  // 3.带参数路径
  // 可以匹配到put请求，http://localhost:3000/app/list/xxxx
  @Put('list/:id')
  update() {
    return 'update:id';
  }

  // 匹配不到,应为上面有“list/:id”被率先匹配
  @Put('list/user')
  updateUser() {
    return { userId: 1 };
  }
}

//@Controller创建一个以/text为路径的控制器
@Controller('/text')
export class Ctroll {
  //当发送以/text为路径的请求并以Get的方式时会走这
  @Get()
  find(@Query() query) {
    //以query的形式发送，即localhost:3000/text?a=1  query的值就是{a:1}
    return query;
  }
}
