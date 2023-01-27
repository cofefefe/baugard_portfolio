const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    poster: { type: String },
    content: { type: String, trim: true, maxlenght: 500 }},
{
    timestamps:true
})

module.exports = mongoose.model('post', postSchema)