import buscaminasFactory from "../service/buscaminasFactory.js";

export const buscaminas = (app) => {
  app.get('/buscaminas', newMatch);
  app.get('/buscaminas/:id', findMatch);
  app.post('/buscaminas', saveMatch);
}

const newMatch = (req, res) => {
  try {
    res.send(buscaminasFactory.create());
  } catch (e) {
    res.status(500).send(e.message);
  }
}

const findMatch = (req, res) => {
  try {
    res.send(buscaminasFactory.findById(req.params.id));
  } catch (e) {
    res.status(500).send(e.message);
  }
}

const saveMatch = (req, res) => {
  try {
    buscaminasFactory.save(req.body);
    res.send('Partida guardada con exito!');
  } catch (e) {
    res.status(500).send(e.message);
  }
}
