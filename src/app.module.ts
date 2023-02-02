import { NBlocksModule } from '@nebulr-group/nblocks-nestjs';
import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './todo.model';

@Module({
  imports: [
    NBlocksModule,
    MongooseModule.forRoot('mongodb://mongodb/nest'),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [AnalyticsController, TodoController],
  providers: [AnalyticsService, TodoService],
})
export class AppModule {}
