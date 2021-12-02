const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			min: 3,
			required: true,
		},
		token: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
