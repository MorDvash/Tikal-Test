import { CreateMessageDto } from './dto/create_message.dto';
import { myDataSource } from '../../utils/db';
import { Message } from './entity';
import { createOne, getManyBy } from '../../utils/crud';
import { GetMessagesDto } from './dto/get_messages.dto';

const MASSAGE_REPOSITORY = myDataSource.getRepository(Message);

export const createMessageDB = async (
  createMessageDto: CreateMessageDto,
): Promise<Message> => {
  const createMessage = new Message();
  createMessage.sender = createMessageDto.sender;
  createMessage.messageContent = createMessageDto.messageContent;
  createMessage.recipient = createMessageDto.recipient;

  return await createOne(MASSAGE_REPOSITORY, createMessage);
};

export const getMessagesDB = async (
  getMessagesDto: GetMessagesDto,
): Promise<Message[]> => {
  return await getManyBy(
    MASSAGE_REPOSITORY,
    'recipient',
    getMessagesDto.recipient,
  );
};
