import { Injectable } from '@nestjs/common';
import { Task } from './task.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  // private tasks: Task[] = [];

  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}
  getAllTasks(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  getTaskById(id: number): Promise<Todo[]>  {
    return this.todoRepository.findBy({id});
  }

  createTask(todo: Todo): Promise<Todo>{
    return this.todoRepository.save(todo);
    
  }

  async updateTask(id: number, updatedTask: Todo): Promise<Todo | null> {
    const task = await this.todoRepository.findOne({where:{id:id}});
    if (!task) {
      return null; // Si la tâche avec l'ID donné n'existe pas, retourner null
    }

   
    task.title = updatedTask.title;
    task.completed = updatedTask.completed;

    return this.todoRepository.save(task); 
  }

  async deleteTask(id: number): Promise<void> {
    await this.todoRepository.delete(id); 
  }
}
