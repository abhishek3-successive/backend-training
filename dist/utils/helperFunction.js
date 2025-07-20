"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomData = void 0;
const generateRandomData = () => {
    return {
        id: Math.floor(Math.random() * 1000),
        value: 'Sample Data'
    };
};
exports.generateRandomData = generateRandomData;
