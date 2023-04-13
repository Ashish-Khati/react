import mongoose from 'mongoose';
const { Schema } = mongoose;
const personSchema = new Schema({
    email: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    linkedin: { type: String },
    github: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String },
    website: { type: String },
    image: { type: String },
    follower: { type: String },
    highesteducation: { type: String },
    whatdoudocurrently: { type: String }
});
export default mongoose.model("Car", personSchema);