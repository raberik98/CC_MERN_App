import mongoose from "mongoose"
import fs from "fs/promises"
import TodoModel from "../Models/Todo.model.js"

import { mongoConnString } from "../env.js"


async function main() {
    try {

        console.log("Script starts running!");
        await mongoose.connect(mongoConnString)
        console.log("Connected to database!");

        const allData = await TodoModel.find()
        console.log("Requested all the data!");

        await fs.writeFile("./todoBackup.json", JSON.stringify(allData))
        console.log("Backup have been saved to a JSON file!");

        await mongoose.disconnect()
        console.log("Disconnected from the database!");

        console.log("Backup SUCCESSFULLY created!");
    } catch (error) {
        console.log(error);
    }
}

main()