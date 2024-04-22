import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    create(task: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        const tasksByHighestId = [...this.tasks].sort((a, b) => b.id - a.id)
        const newTask = {
            id: tasksByHighestId[0].id + 1,
            ...task
        }
        this.tasks.push(newTask)
        return newTask
    }

    findAll() {
        return this.tasks
    }

    findOne(id: number) {
        const user = this.tasks.find(task => task.id === id)
        return user
    }

    update(id: number, body: {}) {
        const user = this.findOne(id)
        if (user) {
            Object.assign(user, body)
            return user
        }
        return null
    }

    deleteOne(id: number) {
        const user = this.findOne(id)
        if (user) {
            const index = this.tasks.indexOf(user)
            this.tasks.splice(index, 1)
            return user
        }
    }
}
