import { model, Schema } from "mongoose"

const ChoreSchema = new Schema({
    title: {
        type: String,
        required: [true, "Gotta have a title"],
        minLength: [3, "Title must be at least 3 characters"],
        maxLength: [100, "Keep title under 100!"]
    },
    description: {
        type: String,
        required: [true, "Give us a short description!"],
        minLength: [10, "Has to be more than 10 characters."],
        maxLength: [250, "Too much info. Stay under 250 characters."]
    },
    location: {
        type: String,
        required: [true, "Gotta give us a location!"]
    }
},
    { timestamps: true })

const Chore = model("Chore", ChoreSchema)

export default Chore