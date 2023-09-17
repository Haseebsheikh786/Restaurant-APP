const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingSchema = new Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    phone: { type: Number, require: true },
    email: { type: String, required: true },
    person: { type: Number, require: true },
    Date: { type: Date, require: true },
    loc: ["Dining room", "Pavilion"],
    comments: { type: String, require: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const virtual = BookingSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
BookingSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Booking = mongoose.model("Booking", BookingSchema);
