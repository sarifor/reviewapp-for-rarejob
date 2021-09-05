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
    }
});

const model = mongoose.model("Article", VideoSchema, "Article");

export default model;