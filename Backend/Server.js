import Express from "express"
import Mongoose from "mongoose"
import { mongoConnString } from "./env.js"
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import TodoModel from "./Models/Todo.model.js"

const App = Express()

App.use(Express.json())

App.use("/",(req,res,next) => {
    console.log(req.ip)
    next()
})


App.get("/api/v1/todos", async (req,res) => {
    try {
        //Find, for requesting multiple data from the database
        const data = await TodoModel.find()

        res.json(data)
    } catch (error) {
        console.log(error);
        res.json({message: "Unexpected error occured!"})
    }
})

App.get("/api/v1/todo/:id", async (req,res) => {
    try {
        //FindById or FindOne, for requesting only one data from the database as an object
        const data = await TodoModel.findById(req.params.id)

        res.json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Unexpected error occured!"})
    }
})

App.post("/api/v1/todo", async (req,res) => {
    try {
        const userInput = { 
            title: req.body.title,
            description: req.body.description
        }

        //Create for registering one or multiple new datas to the database, needs to be an object or an array
        const data = await TodoModel.create(userInput)

        res.status(201).json({message: "New todo have been registered successfully!"})
    } catch (error) {
        console.log(error);
        res.json({message: "Unexpected error occured!"})
    }
})

App.patch("/api/v1/todo/:id", async (req,res) => {
    try {
        const userInput = { 
            title: req.body.title,
            description: req.body.description
        }

        //FindByIdAndUpdate, id, what fields to update, new: true will result in sending the updated data as a return value
        const data = await TodoModel.findByIdAndUpdate(
            req.params.id, 
            {title: req.body.title, description: req.body.description},
            {new: true}
        )


        res.status(201).json(data)
    } catch (error) {
        console.log(error);
        res.json({message: "Unexpected error occured!"})
    }
})

App.patch("/api/v1/todo/note/:id", async (req,res) => {
    try {
        const data = await TodoModel.findOne({_id: req.params.id})

        data.notes.push({ text: req.body.text })

        await data.save()

        res.json(data)

    } catch (error) {
        console.log(error);
        res.json({message: "Unexpected error occured!"})
    }
})

App.patch("/api/v2/todo/note/:id", async (req,res) => {
    try {

        const data = await TodoModel.findOneAndUpdate(
            {_id: req.params.id},
            {$push: {notes: {text: req.body.text}}},
            {new: true}
        )

        res.json(data)

    } catch (error) {
        console.log(error);
        res.json({message: "Unexpected error occured!"})
    }
})

App.delete("/api/v1/todo/:id", async (req,res) => {
    try {
        
        await TodoModel.findByIdAndDelete(req.params.id)

        res.json({message: "Item have been deleted!"})

    } catch (error) {
        console.log(error);
        res.json({message: "Unexpected error occured!"})
    }
})


App.use("/assets", Express.static(`${__dirname}/dist/assets`));

App.get("/*", (req, res, next) => {
    res.sendFile(path.join(`${__dirname}/dist/index.html`));
})


Mongoose.connect(mongoConnString).then(() => {
    App.listen(3000, () => console.log("App is running at port 3000"))
})


