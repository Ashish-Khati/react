import mongoose from 'mongoose';
const { Schema } = mongoose;
const personSchema = new Schema({
    email: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    password: { type: String, required: true },
    aboutme: { type: String, default: 'Add something about you.' },
    phone: { type: String },
    linkedin: { type: String, default: 'Linkedin' },
    github: { type: String, default: 'Github' },
    facebook: { type: String, default: 'Facebook' },
    twitter: { type: String, default: 'Twitter' },
    instagram: { type: String, default: 'Instagram' },
    website: { type: String, default: 'Website' },
    image: { type: String },
    follower: {
        type: String,
        default: "0"
    },
    highesteducation: { type: String },
    whatdoudocurrently: { type: String }
});
export default mongoose.model("Car", personSchema);