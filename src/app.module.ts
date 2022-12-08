import { NBlocksModule } from '@nebulr-group/nblocks-nestjs';
import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';

@Module({
  imports: [NBlocksModule],
  controllers: [AnalyticsController],
  providers: [AnalyticsService],
})
export class AppModule {}
