import { app } from '../../../app';
import request from 'supertest';
import { CreateMessageDto } from '../dto/create_message.dto';

describe('Post /sendMassage', function () {
  it('Create message ', async function () {
    const createMessageDto: CreateMessageDto = {
      sender: 'Test',
      recipient: 'Tikal',
      messageContent: 'Tikal is the best!',
    };

    await request(app)
      .post('/api/message_service/sendMassage')
      .send(createMessageDto)
      .expect(201);
  });

  it('Getting error when sending empty message content', async function () {
    const createMessageDto: CreateMessageDto = {
      sender: 'Test',
      recipient: 'Tikal',
      messageContent: '',
    };

    await request(app)
      .post('/api/message_service/sendMassage')
      .send(createMessageDto)
      .expect(404);
  });
});
