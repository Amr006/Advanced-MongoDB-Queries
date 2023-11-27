const { boolean } = require('joi');
const mongoose = require('mongoose')

const Schema = mongoose.Schema ;


const ConversationsSchema = Schema({

  Participants: [{
    Name: { type: String },
    Id: { type: Schema.Types.ObjectId, ref: 'User' }, // Assuming it references the User model
    Notification: { type: Number, default: 0 },
  }],


},
{ timestamps: true },)

module.exports = mongoose.model("Conversation" , ConversationsSchema)