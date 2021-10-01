export const buscaminas = (app) => {
  app.get('/buscaminas', rootHandler);
}

const rootHandler = (req, res) => {
  res.send('Buscaminas root working!');
}
