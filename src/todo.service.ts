import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './todo.model';
import { NebulrAuthService } from '@nebulr-group/nblocks-nestjs';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<TodoDocument>,
    private readonly authService: NebulrAuthService,
  ) {}

  /**
   * Creates a new todo
   */
  async create(text: string): Promise<TodoDocument> {
    const authContext = this.authService.getCurrentAuthContext();

    const todo = await new this.todoModel({
      text,
      tenant: authContext.tenantId,
      user: authContext.userId,
    }).save();

    return todo;
  }

  /**
   * Lists all todos for current tenant
   */
  async list(): Promise<TodoDocument[]> {
    const authContext = this.authService.getCurrentAuthContext();
    const todos = await this.todoModel
      .find({ tenant: authContext.tenantId })
      .exec();
    return todos;
  }

  /**
   * Updates an existing Todo
   */
  async update(args: {
    id: string;
    text: string;
    done: boolean;
  }): Promise<TodoDocument> {
    const authContext = this.authService.getCurrentAuthContext();

    const { id, text, done } = args;

    const todo = await this.todoModel
      .findOne({ id, tenant: authContext.tenantId })
      .exec();

    todo.text = text;
    todo.done = done;
    await todo.save();

    return todo;
  }
}
