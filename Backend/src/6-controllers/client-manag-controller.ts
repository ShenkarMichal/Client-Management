import express, { NextFunction, Request, Response } from "express"
import clientManagLogic from "../5-logics/client-manag-logic"
import { TodoModel } from "../4-models/to-do-model"

const router = express.Router()

//GET all clients:
router.get("/clients", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const clients = await clientManagLogic.getAllClients()
        response.json(clients)    
    }
    catch (err: any) {
        next(err)        
    }
})

//GET all to-does:
router.get("/to-does", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const todoes = await clientManagLogic.getAllTodoes()
        response.json(todoes)    
    }
    catch (err: any) {
        next(err)        
    }
})

//POST to-do:
router.post("/to-does", async (request: Request, response: Response, next: NextFunction) => {
    try {
        request.body.date = new Date()
        request.body.status = false
        const todo = new TodoModel(request.body)        
        const newTodo = await clientManagLogic.addTodo(todo)
        response.status(201).json(newTodo)    
    }
    catch (err: any) {
        next(err)        
    }
})

//DELETE to-do:
router.delete("/to-does/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id
        await clientManagLogic.deleteTodo(_id)
        response.sendStatus(204)  
    }
    catch (err: any) {
        next(err)        
    }
})


export default router
