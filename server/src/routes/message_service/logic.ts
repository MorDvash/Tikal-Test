import { createMessageDB, getMessagesDB } from './data_queries';
import { CreateMessageDto } from './dto/create_message.dto';
import { GetMessagesDto } from './dto/get_messages.dto';
import { Message } from './entity';

export const createMessage = async (
  createMessageDto: CreateMessageDto,
): Promise<Message> => {
  return await createMessageDB(createMessageDto);
};

export const getMessages = async (
  getMessagesDto: GetMessagesDto,
): Promise<Message[]> => {
  return await getMessagesDB(getMessagesDto);
};
