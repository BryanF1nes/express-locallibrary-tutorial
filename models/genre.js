const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// GenreSchema
const GenreSchema = new Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 100}
});

// Virtual for Genre's URL
GenreSchema.virtual("url").get(function () {
    return `/catalog/genre/${this.id}`;
})

// Export model
module.exports = mongoose.model("Genre", GenreSchema);