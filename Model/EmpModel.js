const mongoose = require("mongoose");

const EmpModel = mongoose.model("employes", {
    empId: {
        type: String
    },
    empFname: {
        type: String
    },
    empLname: {
        type: String
    },
    empMobile: {
        type: String
    },
    EmpEmail: {
        type: String
    },
    empCity: {
        type: String
    },
    empcode: {
        type: String
    },
});
module.exports = EmpModel