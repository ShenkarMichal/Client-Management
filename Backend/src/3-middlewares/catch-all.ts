import { NextFunction, Request, Response } from "express";
import logger from "../2-utils/logger";

function catchAll(err: any, request: Request, response: Response, next: NextFunction){

    console.log(err)

    const status = err.status || 500

    if(status === 500){
        logger.logError("CatchAll error", err)
    }
        
    response.status(status).send(err.message)
}

export default catchAll