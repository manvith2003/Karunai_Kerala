import mongoose from "mongoose";
import CareInstitution from "../careInstitution.models.js";

const institutionMemberSchema = mongoose.Schema({
    memberId:{
        type: String,
        required: true
    },
    careInstitution:{
        type: mongoose.Schema.Types.ObjectId,
        ref: CareInstitution,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date
    },
    gender:{
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"]
    },
    admissionDate:{
        type: Date,
        required: true
    },
    healthStatus:{
        type:String
    },
    educationLevel:{
        type: String
    },
    need:{
        type: String,
        required: true
    },
    notes:{
        type:String
    }
}, {timestamps: true});

const InstitutionMember = mongoose.model('InstitutionMember', institutionMemberSchema);

export default InstitutionMember;