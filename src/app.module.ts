import { NBlocksModule } from '@nebulr-group/nblocks-nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [NBlocksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
