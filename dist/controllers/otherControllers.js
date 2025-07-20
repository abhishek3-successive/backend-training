"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testError = exports.getOtherData = exports.getHealthCheck = void 0;
const otherUtils_1 = require("../utils/otherUtils");
const getOtherData = (req, res) => {
    const data = {
        items: ['item 1', 'item 2', 'item 3'],
        count: 3,
        catagory: 'general'
    };
    res.json((0, otherUtils_1.formatResponse)('other data retrievewd successfully', data));
};
exports.getOtherData = getOtherData;
const getHealthCheck = (req, res) => {
    res.json({
        status: 'OK',
        message: 'server is running properly',
        timestamps: new Date().toISOString(),
    });
};
exports.getHealthCheck = getHealthCheck;
const testError = (req, res, next) => {
    const error = new Error('this is a test error');
    next(error);
};
exports.testError = testError;
