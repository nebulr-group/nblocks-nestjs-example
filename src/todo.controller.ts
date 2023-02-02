import { Controller, Get, Put, Body, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDocument } from './todo.model';

class TodoDto {
  id: string;
  text: string;
  done: boolean;

  constructor(todo: TodoDocument) {
    this.id = todo.id;
    this.text = todo.text;
    this.done = todo.done;
  }
}

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('')
  async list(): Promise<TodoDto[]> {
    const todos = await this.todoService.list();
    return todos.map((todo) => new TodoDto(todo));
  }

  @Put('')
  async update(@Body() body: TodoDto): Promise<TodoDto> {
    const todo = await this.todoService.update(body);
    return new TodoDto(todo);
  }

  @Post('')
  async create(@Body() body: { text: string }): Promise<TodoDto> {
    const todo = await this.todoService.create(body.text);
    return new TodoDto(todo);
  }
}
