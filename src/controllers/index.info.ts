import { Request, Response } from "express"
import getData from '../services/index.info'
const getItems = async (req: Request, res: Response) => {
    try {
       const response = await getData(req.body)
       console.log(response)
       res.send(response)
   } catch(e) {
       console.log(res, "error get items")
   }
}

export default getItems