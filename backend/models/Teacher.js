const { Schema, model } = require('mongoose');

const teacherSchema = new Schema(
  {
    name: String,
    lastName: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Teacher', teacherSchema);
