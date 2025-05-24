import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({

},
{timestamps: true})

export default mongoose.model("Owner",ownerSchema)