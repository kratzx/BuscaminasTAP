export const home = (app) => {
  app.get('/', rootHandler);
}

const rootHandler = (req, res) => {
  res.send('Home root working!');
}
