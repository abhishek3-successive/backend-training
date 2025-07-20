"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponse = exports.formatDate = void 0;
const formatDate = (date) => {
    return date.toISOString();
};
exports.formatDate = formatDate;
const formatResponse = (message, data) => {
    return {
        message,
        data,
        timestamp: new Date().toISOString()
    };
};
exports.formatResponse = formatResponse;
