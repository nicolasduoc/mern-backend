import { RequestHandler } from "express";
import Libro from "./Libro";

export const createLibro: RequestHandler = async (req, res) => {
  const libro = new Libro (req.body);
  const libroGuardado = await libro.save();
  res.json(libroGuardado);
}

export const getLibros: RequestHandler = async (req, res) => {
  try {
    const libros = await Libro.find();
    return res.json(libros);
  } catch (error) {
    res.json(error);
  }
} 

export const getLibro: RequestHandler = async (req, res) => {
  const libroEncontrado = await Libro.findById(req.params.id);
  if (!libroEncontrado) return res.status(204).json();
  return res.json(libroEncontrado);
}


export const deleteLibro: RequestHandler = async (req, res) => {
  const libroEncontrado = await Libro.findByIdAndDelete(req.params.id);
  if (!libroEncontrado) return res.status(204).json();
  return res.json(libroEncontrado);
}

export const updateLibro: RequestHandler = async (req, res) => {
  const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, {new: true});
  if (!libroActualizado) return res.status(204).json();
  res.json(libroActualizado);
}

