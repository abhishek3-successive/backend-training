import app from './app';
import { connectDB, disconnectDB } from './config/db';

const PORT = 5003;

connectDB();

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


process.on('SIGINT', async () => {
  console.log('\n SIGINT received. Shutting down gracefully...');
  await disconnectDB();
  server.close(() => {
    console.log(' Server closed');
  });
});
