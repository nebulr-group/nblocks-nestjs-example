import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true })
export class Todo {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true, default: false })
  done: boolean;

  @Prop({ required: true, immutable: true })
  tenant: string;

  @Prop({ required: true, immutable: true })
  user: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
