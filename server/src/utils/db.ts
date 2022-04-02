import { DataSource } from 'typeorm';
import { Message } from '../routes/message_service/entity';

export const myDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PGHOST,
  port: 5432,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  synchronize: true,
  entities: [Message],
});
