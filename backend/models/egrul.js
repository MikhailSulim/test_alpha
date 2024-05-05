const mongoose = require('mongoose');

const egrulSchema = new mongoose.Schema(
  {
    rn: {
      type: String,
      required: false,
    },
    n: {
      type: String,
      required: [true, 'у юридического лица должно быть название'],
    },
    o: {  
      type: String,
      required: true,
    },
    e: {
      type: String,
      required: false,
    },
    t: {
      type: String,
      required: true,
    },
    i: {
      type: String,
      required: true,
    },
    p: {
      type: String,
      required: false,
    },
    g: {
      type: String,
      required: false,
    },
    r: {
      type: String,
      required: true,
    },
    k: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('egrul', egrulSchema);
