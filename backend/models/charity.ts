import mongoose from "mongoose";

const CharitySchema = new mongoose.Schema({
    ein: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
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