"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const otherControllers_1 = require("../controllers/otherControllers");
const dataSeeder_1 = require("../utils/dataSeeder");
const router = express_1.default.Router();
// Get route for other data
router.get('/data', otherControllers_1.getOtherData);
// health check endpoint
router.get('/heath', otherControllers_1.getHealthCheck);
//post router for seeding data
router.post('/seed', (req, res) => {
    const data = (0, dataSeeder_1.generateMockData)();
    res.json({
        message: 'Data seeded sucessfully',
        data,
        count: data.length
    });
});
router.get('/test-error', otherControllers_1.testError);
exports.default = router;
