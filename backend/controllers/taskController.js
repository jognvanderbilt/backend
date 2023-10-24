import Task from '../models/taskModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js';


const addTask = asyncHandler(async (req , res) => {
    const {title} = req.body;

    const taskExist = await Task.findOne({title});
    if(taskExist){
        res.status(400);
        throw new Error('User already Exist');
    }

   

    const task = await Task.create({title});

    if(task){
        res.status(200).json({
            _id:task._id,
            title:task.title
        })
    }else{
        res.status(400);
        throw new Error('Invalid User Data');
    }
})


const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({});
    res.json(tasks)
})


export {addTask , getTasks}