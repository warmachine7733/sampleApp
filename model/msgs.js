var mongoose = require('mongoose');
//msg schema 
var MsgSchema = mongoose.Schema({
	message: { type: String },
	sentFrom: { type: String },
	sentTo: { type: String },
	sentAt: { type: String },
	delete: { type: Boolean }
})
module.exports = mongoose.model('Msgs', MsgSchema);
