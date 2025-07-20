"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserProfile = exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Mock user data
const users = [
    { id: 1, username: 'GG', password: 'pass123' },
    { id: 2, username: "Goku", password: 'pass234' }
];
const login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'username and password are required' });
    }
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(400).json({ message: 'Invalid Credentials' });
    }
    const secret = 'secretkey';
    const tokken = jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, secret, { expiresIn: '1m' });
    res.json({
        message: 'Login Successfully',
        tokken,
        user: { id: user.id, username: user.username }
    });
};
exports.login = login;
const getUserProfile = (req, res) => {
    // req.user is pop by auth middlware
    res.json({
        message: 'user profile retrieved succesfully',
        user: req.user
    });
};
exports.getUserProfile = getUserProfile;
const createUser = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password is required" });
    }
    //check if user exist
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = {
        id: users.length + 1,
        username,
        password
    };
    users.push(newUser);
    res.status(201).json({
        user: { id: newUser.id, username: newUser.username }
    });
};
exports.createUser = createUser;
