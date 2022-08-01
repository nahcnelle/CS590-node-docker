import express from 'express';
import routes from './src/routes/route.js';

const app = express();
const port = 3000;
const host = '0.0.0.0';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(port, host, function () {
  console.log(`server started on http://${host}:${port}`);
});