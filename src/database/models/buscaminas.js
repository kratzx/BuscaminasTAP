import mongoose from 'mongoose';
import { buscaminas } from '../../schema/buscaminas.js';

const buscaminasSchema = mongoose.Schema(buscaminas);
const Buscaminas = mongoose.Model('Buscaminas', buscaminasSchema);

export const buscaminasUpdate = async (id, campo) => {
  await Buscaminas.updateOne({ id }, { campo });
}