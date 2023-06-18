import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/client-model';
import { TodoModel } from 'src/app/models/todo-model';
import { ClientManagService } from 'src/app/services/client-manag.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit{

    public clients: ClientModel[]

    public newTodo = new TodoModel()

    public constructor(private service: ClientManagService, private router: Router) {}

    async ngOnInit(): Promise<void> {
        try {
            this.clients = await this.service.getAllClient()    
        }
        catch (err: any) {
            console.log(err)            
        }        
    }

    public async addTodo(): Promise<void> {
        try {
            await this.service.addTodo(this.newTodo)    
            alert("The todo has been added")
            this.router.navigateByUrl("/to-does")
        }
        catch (err: any) {
            console.log(err)            
        }
    }


}
