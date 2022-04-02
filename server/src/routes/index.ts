import express from 'express';
import { messageService } from './message_service';

const router = express.Router();

router.use('/api/message_service', messageService);

export { router as routes };
