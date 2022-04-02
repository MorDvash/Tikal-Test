import { app } from './app';
import { myDataSource } from './utils/db';

export const start = async () => {
  try {
    myDataSource.initialize().then(() => {
      console.log('DB Connected!');
      app.listen(3000, () => {
        console.log('Listening on port 3000');
      });
    });
  } catch (error) {
    console.error(error);
  }
};

start();
