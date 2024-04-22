import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    findAll() {
        return []
    }

    @Get('query')
    findAlls(@Query('role') role?: "ENGINEER" | "ADMIN" | "SUPER_ADMIN") {
        return { role }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post()
    create(@Body() body: {}) {
        return { body }
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: {}) {
        return { id, body }
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return { id }
    }
}
