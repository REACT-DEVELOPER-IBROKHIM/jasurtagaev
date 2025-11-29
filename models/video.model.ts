import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  postid: {
    type: Number,
    required: [true, "Please enter an article ID to attach"],
  },
  tag: {
    uz: { type: String, required: [true, "Please enter a tag in Uzbek"] },
    ru: { type: String, required: [true, "Please enter a tag in Russian"] },
    en: { type: String, required: [true, "Please enter a tag in English"] },
    kr: { type: String, required: [true, "Please enter a tag in Cyrillic"] },
  },
  title: {
    uz: { type: String, required: [true, "Please enter a title in Uzbek"] },
    ru: { type: String, required: [true, "Please enter a title in Russian"] },
    en: { type: String, required: [true, "Please enter a title in English"] },
    kr: { type: String, required: [true, "Please enter a title in Cyrillic"] },
  },
  link: {
    type: String,
    required: [true, "Please enter a video link"],
  },
  thumbnail: {
    type: String,
    required: [true, "Please enter a thumbnail URL"],
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

const Video = mongoose.models.videos || mongoose.model("videos", VideoSchema);

export default Video;
