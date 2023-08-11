import mongoose from "mongoose";

const CharitySchema = new mongoose.Schema({
    ein: {
        type: String,
        unique: [true, 'already on your fav list']
    },
    name: {
        type: String,
        required: [true, 'please provide name'],
        unique: [true, 'already on your fav list']
    },
    profileUrl: { type: String },
    matchedTerms: [{ type: String }],
    slug: { type: String },
    location: { type: String },
    tags: [{ type: String }],
    description: { type: String },
    logoUrl: { type: String },
    coverImageUrl: { type: String },
    logoCloudinaryId: { type: String },
});



export default mongoose.model('fav-charity-list', CharitySchema);