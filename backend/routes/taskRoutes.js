import express from 'express'
import {addTask , getTasks} from '../controllers/taskController.js'


const router = express.Router();

router.post('/addtask', addTask);
router.get('/alltasks' , getTasks)


export default router;