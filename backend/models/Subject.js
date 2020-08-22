const { Schema, model } = require('mongoose');

const subjectSchema = new Schema(
  {
    name: String,

    teachers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
      },
    ],
    days: {
      type: String,
      enum: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    },
    time: {
      type: String,
      enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Subject', subjectSchema);
