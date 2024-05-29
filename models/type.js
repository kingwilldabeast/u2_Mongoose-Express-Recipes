const { Schema } = require('mongoose')

const typeSchema = new Schema(
    {
        ethnicity: {type: String, required: true},
        famous_chef: {type: String, required: true},
        have_tried: {type: Boolean, required: true},
    },
    {timestamps: true}

)


module.exports = typeSchema