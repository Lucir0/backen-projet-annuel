import express from 'express';
import bodyParser from 'body-parser';

import sequelize from './config/db';
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => res.send('Hello World!'));

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
      console.log('Database synchronized successfully.');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
