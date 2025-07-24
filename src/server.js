import app from "./app.js";

const PORT = 3006;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});