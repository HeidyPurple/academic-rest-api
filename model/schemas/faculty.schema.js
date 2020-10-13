/** packages */
const mongoose = require("mongoose");

/**Schema creation */
const facultySchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    },
    deanName:{
        type: "String",
        required: true
    }
});

/** Schema exportation */
module.exports = facultySchema;
