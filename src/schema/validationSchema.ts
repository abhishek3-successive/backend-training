import joi, { ObjectSchema } from "joi"

export const validationSchema:Record<string,ObjectSchema>={
    '/register':joi.object({
        username:joi.string().min(3).max(15).required(),
        password:joi.string().min(6).required()
    }),

    '/login':joi.object({
        username:joi.string().min(3).max(15).required(),
        password:joi.string().min(6).required()
    })
}