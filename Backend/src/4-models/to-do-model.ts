import mongoose from "mongoose";
import { ClientModel } from "./client-model";

//1. Interface:
export interface ITodoModel extends mongoose.Document {
    description: string
    date: string
    clientId: mongoose.Schema.Types.ObjectId
    status: boolean
}

export const TodoSchema = new mongoose.Schema<ITodoModel>({
    description: {
        type: String,
        required: [true, "Description is missing"],
        minlength: [5, "Description is too short"],
        maxlength: [150, "Description is too long"],
        trim: true
    },
    date: {
        type: String, 
        required: [true, "Date is missing"]        
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId
    },
    status: {
        type: Boolean,        
    }
},{
    versionKey: false,
    toJSON: {virtuals: true},
    id: false
})

TodoSchema.virtual("clients", {
    ref: ClientModel, 
    localField: "clientId",
    foreignField: "_id",
    justOne: true
})

//3. Model:
export const TodoModel = mongoose.model<ITodoModel>("TodoModel", TodoSchema, "to-does")