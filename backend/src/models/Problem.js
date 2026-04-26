import mongoose from 'mongoose'
const problemSchema = new mongoose.Schema({
    title : {type : String, required : true},
    problem : {type : String, required : true},
    solution : {type : String, required : true},
    tags : [String],
}, {timestamps : true})

const Problem = mongoose.model('Problem', problemSchema)

export default Problem
