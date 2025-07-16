"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("./Day3/middlewares/auth");
const app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Example of a login route where a token is generated
app.post('/login', (req, res) => {
    const { userId, role } = req.body;
    if (!userId || !role) {
        return res.status(400).json({ message: 'Missing userId or role' });
    }
    // Generate JWT token after user authentication (example)
    const token = (0, auth_1.generateToken)({ userId, role });
    res.json({ message: 'Login successful', token });
});
// Protected route that requires token authentication
app.get('/protected', auth_1.authenticateToken, (req, res) => {
    const user = req;
    res.json({ message: 'This is a protected route', user });
});
// Root endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
