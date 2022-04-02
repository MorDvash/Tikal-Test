import { app } from '../../../app';
import request from 'supertest';
import { CreateMessageDto } from '../dto/create_message.dto';

describe('Post /getMessages', function () {
  it('Gets all recipient messages ', async function () {
    const createMessageDto: CreateMessageDto = {
      sender: 'Test',
      recipient: 'Tikal',
      messageContent: 'How are you?',
    };

    await request(app)
      .post('/api/message_service/sendMassage')
      .send(createMessageDto)
      .expect(201);

    await request(app)
      .post('/api/message_service/getMessages')
      .send({
        recipient: 'Tikal',
      })
      .expect(200);
  });

  it('Getting an error when sending recipient that dose not exist ', async function () {
    await request(app)
      .post('/api/message_service/getMessages')
      .send({
        recipient: 'aw4,cld',
      })
      .expect(404);
  });
});
