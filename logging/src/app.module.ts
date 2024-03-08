import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LogController } from './log/log.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [LogController],
})
export class AppModule {}
