import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly TasksService: TasksService) { }
    @Get()
    findAll() {
        return this.TasksService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.TasksService.findOne(+id)
    }

    @Post()
    create(@Body() body: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.TasksService.create(body)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.TasksService.update(+id, body)
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.TasksService.deleteOne(+id)
    }
}
