/** packages */
const mongoose = require("mongoose");

/**Schema creation */
const programSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    },
    directorName:{
        type: "String",
        required: true
    },

    idFaculty:{
        type: "String",
        required: true
    }
});

/** Schema exportation */
module.exports = programSchema;
