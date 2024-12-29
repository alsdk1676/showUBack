import { Schema , model} from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const CommunityInfoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, enum: ["뮤지컬", "공연", "영화", "연극", "밴드"], required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: String, default: getCurrentTime },
  updatedAt: { type: String, default: getCurrentTime },
});

export default model('CommunityInfo', CommunityInfoSchema, 'communityInfo');