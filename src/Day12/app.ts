import express from "express"
import { HeaderSecurity } from "./middleware/securityHeader";



const app= express();

HeaderSecurity.apply(app);

app.get('/', (req, res) => {
  res.send('Security headers are active!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});