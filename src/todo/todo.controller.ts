// import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
// import { TodoService } from './todo.service';
// import { Task } from './task.interface';
// import { Todo } from './task.entity';

// @Controller('todo')
// export class TodoController {
//   constructor(private readonly todoService: TodoService) {}

//   @Get()
//   async findAll(): Promise<Todo[]> {
//     return this.todoService.getAllTasks();
//   }

//   @Get(':id')
//   getTaskById(@Param('id') id: number): Promise<Todo[]> {
//     return this.todoService.getTaskById(id);
//   }

//   @Post()
//   async create(@Body() todo: Todo): Promise<Todo> {
//     return this.todoService.createTask(todo);
//   }

//   @Put(':id')
//   async updateTask(@Param('id') id: number, @Body() updatedTask: Todo): Promise<Todo | null> {
//     return this.todoService.updateTask(id, updatedTask);
//   }

//   @Delete(':id')
//   async deleteTask(@Param('id') id: number): Promise<void> {
//     return this.todoService.deleteTask(id);
//   }
// }

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'; // Importation des décorateurs Swagger
import { TodoService } from './todo.service';
import { Task } from './task.interface';
import { Todo } from './task.entity';

@ApiTags('todo') // Ajout de tags pour ce contrôleur
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks', description: 'Retrieve all tasks' }) // Description de l'opération
  @ApiResponse({ status: 200, description: 'Return all tasks' }) // Réponse attendue
  async findAll(): Promise<Todo[]> {
    return this.todoService.getAllTasks();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get task by ID', description: 'Retrieve task by its ID' })
  @ApiResponse({ status: 200, description: 'Return the task with the specified ID' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  getTaskById(@Param('id') id: number): Promise<Todo[]> {
    return this.todoService.getTaskById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a task', description: 'Create a new task' })
  @ApiResponse({ status: 201, description: 'Task created successfully' })
  async create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.createTask(todo);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a task', description: 'Update an existing task' })
  @ApiResponse({ status: 200, description: 'Task updated successfully' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  async updateTask(@Param('id') id: number, @Body() updatedTask: Todo): Promise<Todo | null> {
    return this.todoService.updateTask(id, updatedTask);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task', description: 'Delete an existing task' })
  @ApiResponse({ status: 204, description: 'Task deleted successfully' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  async deleteTask(@Param('id') id: number): Promise<void> {
    return this.todoService.deleteTask(id);
  }
}

