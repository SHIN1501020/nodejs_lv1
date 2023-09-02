import { CustomError } from "./errors/CustomError.js";



export const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.status).json({message: err.message});
    } 

    if (err.message.includes("is required")) {
        return res.status(400).json({message: "데이터 형식이 올바르지 않습니다."});
    }

    return res.status(500).json({ message: "Internal Server Error "});
}