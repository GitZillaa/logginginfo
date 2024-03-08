import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class LogController {
  constructor(private configService: ConfigService) {}

  @Get('info')
  info() {
    const level = this.configService.get('LOG_LEVEL');
    if (level === 'INFO') {
      console.log(`${new Date().toISOString()} info: This is an info message`);
    }
    return { message: 'This is an info route' };
  }

  @Get('debug')
  debug() {
  }

  @Get('error')
  error() {
  }

  @Get('fatal')
  fatal() {
  }
}
