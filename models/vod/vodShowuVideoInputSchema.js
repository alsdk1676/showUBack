import { Schema,model } from "mongoose";


const vodShowuVideoInputSchema = new Schema({
  videoID : {type : String ,require : true}, //해당 영상의 ID
  usersId :{type :Schema.Types.ObjectId, ref : 'User'}, // 자신의 ID 
  myComment : {type : String,require:true}, // 내가 쓴 글
  mycreatedAt: { type: String, default: getCurrentTime }, // 댓글 생성 시간
  opponent: { type : String,require:true}, // 다른사용자
  opponentcontent: { type: String, required: true }, // 다른사용자 댓글 내용
  myChoice : {type:String,require:true}, // 내가 관심을 누른 영상
  myChoicemanImage : {type:String,require:true},// 관심을 누른 영상의 썸네일
})

export default model("VodInput",vodShowuVideoInputSchema,"vodinput")