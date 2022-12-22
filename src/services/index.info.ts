import { Request, Response } from "express";
import ItemModel from "../model/index.mode";
import { Data } from "../interface/index.interface";

const getData = async (req: Request) => {
    const response = await req.body
    return response
}

const insertData = async (datas: Data) => {
    const responseInsert = ItemModel.create(datas)

    return responseInsert
}



export {getData, insertData}