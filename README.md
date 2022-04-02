
# Tikal-Test

A message service that allow you to send messages between people. 




## Tech Stack

**Server:** Node, Express, Typescript, Docker.

**DataBase:** PostgresSql.


## Installation

Install my project and run it.

```bash
git clone https://github.com/MorDvash/Tikal-Test.git

npm install my-project

docker-compose up
```
    
## API Reference

#### To send a massage.

```http
  POST http://localhost:3000/api/message_service/sendMassage
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `sender` | `string` | **Required**. |
| `recipient` | `string` | **Required**. |
| `messageContent` | `string` | **Required**. |

#### To receive messages.

```http
  POST http://localhost:3000/api/message_service/getMessages
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `recipient`      | `string` | **Required**. |




## Author

- [@MorDvash](https://www.linkedin.com/in/mordvash/)


