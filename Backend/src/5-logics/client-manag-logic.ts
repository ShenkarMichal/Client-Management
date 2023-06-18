import { ClientModel, IClientModel } from "../4-models/client-model";
import { ResourceNotFoundErrorModel, ValidateErrorModel } from "../4-models/errors-model";
import { ITodoModel, TodoModel } from "../4-models/to-do-model";

function getAllClients(): Promise<IClientModel[]> {
    return ClientModel.find().exec()
}

function getAllTodoes(): Promise<ITodoModel[]> {
    return TodoModel.find().populate("clients").exec()
}

function addTodo(todo: ITodoModel): Promise<ITodoModel> {
    //Validation:
    const errors = todo.validateSync()
    if(errors) throw new ValidateErrorModel(errors.message)

    return todo.save()
}

async function deleteTodo(_id:string): Promise<void> {
    const deleteTodo = await TodoModel.findByIdAndDelete(_id)
    if(!deleteTodo) throw new ResourceNotFoundErrorModel(_id)    
}


export default {
    getAllClients,
    getAllTodoes,
    addTodo,
    deleteTodo
}