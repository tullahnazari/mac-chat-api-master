import mongodb from 'mongodb';

export default {
//local env
//   "port": 3005,
//   "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb+srv://tullahnazari:wahdat08@cluster0-hxzfc.mongodb.net/test?retryWrites=true&w=majority",
  "bodyLimit": "100kb"
}
