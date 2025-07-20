"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const otherRoutes_1 = __importDefault(require("./otherRoutes"));
const router = express_1.default.Router();
//Mount 
router.use('/user', userRoutes_1.default);
router.use('other', otherRoutes_1.default);
//Root api 
router.get('/', (req, res) => {
    res.json({
        message: `Welcome to Backend Api`,
        endpoints: {
            users: '/api/users',
            other: '/api/other'
        }
    });
});
exports.default = router;
