import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post() // one way to get body params
    createTask(@Body() body): Task {
        return this.tasksService.createTask(body.title, body.description);
    }

    // @Post() // second way to get body params
    // createTask(@Body('title') title: string, @Body('description') description: string,): Task {
    //     return this.tasksService.createTask(title, description);
    // }
}
