import express, { Request, Response } from 'express';
import { validate_request } from '../../middleware/validate_request';
import { CreateMessageDto } from './dto/create_message.dto';
import { createMessage, getMessages } from './logic';
import { GetMessagesDto } from './dto/get_messages.dto';
import { Message } from './entity';
import { body } from 'express-validator';

const router = express.Router();

router.post(
  '/sendMassage',
  body('messageContent').isLength({ min: 1 }),
  validate_request,
  async (req: Request, res: Response, next: (error: Error) => void) => {
    try {
      const createMessageDto: CreateMessageDto = req.body;
      const message: Message = await createMessage(createMessageDto);
      res.status(201).send({ message });
    } catch (e: any) {
      next(e);
    }
  },
);

router.post(
  '/getMessages',
  async (req: Request, res: Response, next: (error: Error) => void) => {
    try {
      const getMessagesDto: GetMessagesDto = req.body;
      const messages: Message[] = await getMessages(getMessagesDto);
      res.status(200).send({ messages });
    } catch (e: any) {
      next(e);
    }
  },
);

export { router as messageService };
