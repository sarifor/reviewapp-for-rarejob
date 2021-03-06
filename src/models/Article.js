import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ArticleSchema = new mongoose.Schema({
    url: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        unique: true,
        required: false
    },
    clickedDate: {
        type: String,
    }, 
    // versionKey: false
});
// }, { versionKey: false });

const model = mongoose.model("Article", ArticleSchema, "Article");

export default model;