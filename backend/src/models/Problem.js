import mongoose from 'mongoose'
const problemSchema = new mongoose.Schema({
    titlte : {type : String, required : true},
    porblem : {type : String, required : true},
    solution : {type : String, required : true},
    tags : [String],
}, {timestamps : true})

const Problem = mongoose.model('Problem', problemSchema)

export default Problem