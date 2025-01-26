const mongoose=require('mongoose');
const{Schema}=mongoose;
const hackathonSchema= new Schema ({
    title:{
        type:String,
        required:true
    },
    description:{
      type: String,
      required:true
    },
    author :{
        type: String,
        required:true
      },
      
} ,{timestamps:true});

export const Blog = mongoose.model("hackthon ",hackathonSchema)