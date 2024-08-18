import mongoose from 'mongoose';

const organizationTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['Orphanage', 'Old Age Home', 'Rehabilitation Center'],
        required: true,
    },
});

export default mongoose.model('OrganizationType', organizationTypeSchema);
