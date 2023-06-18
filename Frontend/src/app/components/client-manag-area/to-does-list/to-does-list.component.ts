import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/models/todo-model';
import { ClientManagService } from 'src/app/services/client-manag.service';

@Component({
  selector: 'app-to-does-list',
  templateUrl: './to-does-list.component.html',
  styleUrls: ['./to-does-list.component.css']
})
export class ToDoesListComponent implements OnInit{

    public todoes: TodoModel[]

    public constructor(private service: ClientManagService) {}

    async ngOnInit(): Promise<void> {
        try {
            this.todoes = await this.service.getAllTodoes()    
        }
        catch (err: any) {
            console.log(err)            
        }        
    }

    public getIndex(_id: string): number {
        const index = this.todoes.findIndex(t => t._id === _id)
        return index +1
    }

    public async deleteTodo(_id: string): Promise<void> {
        try {
            if(!window.confirm("Delete?")) return
            await this.service.deleteTodo(_id)
            alert("The to-do has been deleted")
            this.todoes = this.todoes.filter(t => t._id !== _id)
        }
        catch (err: any) {
            console.log(err)            
        }
    }

    public async updateTodo(_id: string): Promise<void> {
        try {
            const todo = this.todoes.find(t => t._id === _id)
            if(todo.status) todo.status = false
            else if(!todo.status) todo.status = true
            await this.service.updateTodo(todo)            
        }
        catch (err: any) {
            console.log(err)            
        }
    }

}
