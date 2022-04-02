import { myDataSource } from '../utils/db';

beforeAll(async () => {
  await myDataSource.initialize();
});

afterAll(async () => {
  await myDataSource.destroy();
});
