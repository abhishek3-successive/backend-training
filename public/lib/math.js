import addFn from 'lodash/add.js';
import subtract from 'lodash/subtract.js';
import multiply from 'lodash/multiply.js';
import divide from 'lodash/divide.js';

export const add = (a, b) => addFn(a, b);
export const sub = (a, b) => subtract(a, b);
export const mul = (a, b) => multiply(a, b);
export const div = (a, b) => divide(a, b);
