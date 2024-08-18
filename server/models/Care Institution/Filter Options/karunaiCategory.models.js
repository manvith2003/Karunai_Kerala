import mongoose from 'mongoose';

const karunaiCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["Sweets and Bakery", "Clothes", "Food", "Fruits", "Stationary", "Hotel", "Training", "Love/Care"],
        required: true,
    },
});

export default mongoose.model('KarunaiCategory', karunaiCategorySchema);
