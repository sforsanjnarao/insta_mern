const mongoose=require()

const userSchema = new mongoose.Schema({
    content: {
        type: String,
        require:true
         
    },

    media: {
        type: String,
        require:true
        
    }

})