"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customHeader_1 = __importDefault(require("././middlewares/customHeader"));
const middlewareChaining_1 = require("././middlewares/middlewareChaining");
const custommiddleware_1 = __importDefault(require("././middlewares/custommiddleware"));
const ratelimiter_1 = __importDefault(require("././middlewares/ratelimiter"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// Middleware to parse JSON
app.use(express_1.default.json());
// Custom logging middleware
app.use(custommiddleware_1.default);
// Rate limiter: Allow max 5 requests per IP
app.use((0, ratelimiter_1.default)(10));
// Add a custom header to every response
app.use((0, customHeader_1.default)('X-Powered-By', 'Express-Custom'));
// Chain multiple custom middlewares
app.use(middlewareChaining_1.middleware1, middlewareChaining_1.middleware2, middlewareChaining_1.middleware3);
app.use('/api', routes_1.default);
// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
exports.default = app;
