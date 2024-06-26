const { Schema } = require('mongoose')

const recipeSchema = new Schema(
    {
        type_id: { type: Schema.Types.ObjectId, ref: 'Type', required: true },
        name: {type: String, required: true},
        preptime: {type: Number, required: true},
        totaltime: {type: Number, required: true},
        calories:  {type: Number, required: true},
        difficulty: {type: String, required: true}
    },
    {timestamps: true}

)


module.exports = recipeSchema