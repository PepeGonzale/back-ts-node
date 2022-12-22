import Router from 'express'
import getItems from '../controllers/index.info'
const router = Router();

router.post("/file", getItems)


export default router