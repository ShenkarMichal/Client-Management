import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientModel } from '../models/client-model';
import { appConfig } from '../utils/config';
import { firstValueFrom } from 'rxjs';
import { TodoModel } from '../models/todo-model';

@Injectable({
  providedIn: 'root'
})
export class ClientManagService {

    constructor(private http: HttpClient) { }

    public async getAllClient(): Promise<ClientModel[]> {
        const observable = this.http.get<ClientModel[]>(appConfig.clientURL)

        const clients = await firstValueFrom(observable)
        return clients              
    }

    public async getAllTodoes(): Promise<TodoModel[]> {
        const observable = this.http.get<TodoModel[]>(appConfig.TodoURL)

        const todoes = await firstValueFrom(observable)
        return todoes
    }

    public async addTodo(todo: TodoModel): Promise<TodoModel> {
        const observable = this.http.post<TodoModel>(appConfig.TodoURL, todo)
        
        const newTodo = await firstValueFrom(observable)
        return newTodo
    }

    public async deleteTodo(_id: string): Promise<void> {
        const observable = this.http.delete<void>(appConfig.TodoURL + _id)
        await firstValueFrom(observable)
    }

    public async updateTodo(todo: TodoModel): Promise<TodoModel> {
        const observable = this.http.put<TodoModel>(appConfig.TodoURL, todo)
        const updateTodo = await firstValueFrom(observable)

        return updateTodo
    }
}
