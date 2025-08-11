import app from './app';
import { seedCountries } from './scripts/seed';
import configurations from './config/configuration';

const {port} = configurations 

const startServer = async () => {
  try {
    await seedCountries(); 

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
