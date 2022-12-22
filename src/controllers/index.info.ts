import { Request, Response } from "express"
import {getData, insertData} from '../services/index.info'
const getItems = async (req: Request, res: Response) => {
    try {
       const response = await getData(req)
       res.send(response)
   } catch(e) {
       console.log(res, "error get items")
   }
}
const postItem = async (req: Request, res: Response) => {
    const response = await insertData(req.body)
    res.send(response).status(200)
}

export  {getItems, postItem}