import mongoose from "mongoose"
import fs from "fs/promises"
import TodoModel from "../Models/Todo.model.js"

import { mongoConnString } from "../env.js"


async function main() {
    try {

        console.log("Script starts running!");
        await mongoose.connect(mongoConnString)
        console.log("Connected to database!");

        const allData = await fs.readFile("./todoBackup.json", { encoding: "utf-8" })
        console.log("Read the backup data!");

        await TodoModel.deleteMany()
        console.log("Cleaned the corrupted datbase!");

        const formatedData = JSON.parse(allData).map(nextTodo => {
            return {
                title: nextTodo.title,
                description: nextTodo.description,
                prio: nextTodo.prio ? nextTodo.prio : null,
                notes: nextTodo.notes.map(nextNote => ({text: nextNote.text}))
            }
        });
        console.log("Formated the backup data!");

        await TodoModel.create(formatedData)
        console.log("Successfully saved the backup data to the database!");

        await mongoose.disconnect()
        console.log("Disconnected from the database!");

        console.log("Backup SUCCESSFULLY restored!");
    } catch (error) {
        console.log(error);
    }
}

main()