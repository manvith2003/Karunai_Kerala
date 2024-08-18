import mongoose from "mongoose";
import User from "../User/user.models.js";

const providerSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    organizationName:{
        type:String,
        required:true
    },
    ownerName:{
        type:String,
        required:true
    },
    organizationId:{
        type:String,
        required:true
    },
    servicesOffered:[
        {
            type: String,
            enum: ['Sweets and Bakery', 'Clothes', 'Fruits', 'Stationary', 'Hotel', 'Training']
        }
    ],
    GSTId:{
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
    providerImages:[
        {
            url:{
            type:String,
        },
        public_id:{
            type:String
        }
        }
    ],
}, {timestamps: true})

const Provider = mongoose.model('Provider', providerSchema);

export default Provider;