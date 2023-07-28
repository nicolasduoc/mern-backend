import { Schema, model } from "mongoose";

const libroSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  autor: {
    type: String,
    trim: true
  },
},{
  versionKey: false,
  timestamps: true,
});

export default model('Libro', libroSchema);