import mongoose from "mongoose";

//1. Interface:
export interface IClientModel extends mongoose.Document {
    name: string
    business: string
    tel: string
    email: string
}

//2. Schema:
export const ClientSchema = new mongoose.Schema<IClientModel>({
    name: {
        type: String,
        required: [true, "Name is missing"],
        minlength: [2, "Name is too short"],
        maxlength: [20, "Name is too long"],
        trim: true
    },
    business: {
        type: String,
        required: [true, "Business is missing"],
        minlength: [2, "Business is too short"],
        maxlength: [30, "Business is too long"],
        trim: true,
        unique: true
    },
    tel: {
        type: String,
        required: [true, "Tel is missing"],
        minlength: [10, "Tel maust be 10 characters"],
        maxlength: [10, "Tel maust be 10 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is missing"],
        validate: {
            validator: function(value) {
              // Check if email is legal:
              const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              return emailRegex.test(value);
            },
            message: "Email is not legal"
          }
        }   
})

//3. Model:
export const ClientModel = mongoose.model<IClientModel>("ClientModel", ClientSchema, "clients")