const mongoose = require('mongoose')

const { Schema, SchemaTypes, model } = mongoose

const contactSchema = new Schema({
    movieId: {
        type: String,
        required: [true, 'Please set name for the contact']
    },
    status: {
        type: Boolean,
        required: [true, 'Please set email for the contact'],
        default: false
    },

    userId: {
        type: SchemaTypes.ObjectId,
    }
},
    { versionKey: false, timestamps: true })

const Vote = model('vote', contactSchema)

module.exports = Vote
