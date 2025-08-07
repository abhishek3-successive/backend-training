import app from './app';
import { seedCountries } from './scripts/seed';

const PORT = 5000;

const startServer = async () => {
  try {
    await seedCountries(); 

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
