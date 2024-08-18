import mongoose from "mongoose";
import User from "../User/user.models.js";

const careInstitutionSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    organizationName:{
        type: String,
        required: true
    },
    ownerName:{
        type:String,
        required:true
    },
    organizationType:{
        type:String,
        required:true,
        enum: ['Orphanage', 'Old Age Home', 'Rehabilitation Center']
    },
    organizationId:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        default:"India",
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    servicesPreferred:[
        {
            type:String,
            enum: ["Sweets and Bakery", "Clothes", "Food", "Fruits", "Stationary", "Hotel", "Training", "Love/Care"]
        }
    ],
    description:{
        type: String
    },
    coverImage:{
        url:{
            type:String,
        },
        public_id:{
            type:String
        },
    },
    logoImage:{
        url:{
            type:String,
        },
        public_id:{
            type:String
        }
    },
    careInstituteImages:[
        {
            url:{
            type:String,
        },
        public_id:{
            type:String
        }
        }
    ],
    karunaiNeeded:[
        {
            type:String,
            enum: ["Sweets and Bakery", "Clothes", "Food", "Fruits", "Stationary", "Hotel", "Training", "Love/Care"]
        }
    ]
}, {timestamps: true})

const CareInstitution = mongoose.model('CareInstitution', careInstitutionSchema);

careInstitutionSchema.index({ organizationName: 'text', address: 'text', city: 'text' });

export default CareInstitution;