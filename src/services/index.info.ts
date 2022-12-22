import { Request, Response } from "express";


const getData = async (req: Request) => {
    const response = await req.body
    console.log(response)
    return response
}

export default getData