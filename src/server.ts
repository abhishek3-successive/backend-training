import app from './app';
import { connectDB, disconnectDB } from './lib/db';
import { seedCountries } from './scripts/seed';
import configurations from './config/configuration';

const { port } = configurations;

const startServer = async () => {
  try {
    await connectDB();
    await seedCountries();

    const server = app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

    process.on('SIGINT', async () => {
      console.log('\nSIGINT received. Shutting down gracefully...');
      await disconnectDB();
      server.close(() => {
        console.log('Server closed');
        process.exit(0);
      });
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
