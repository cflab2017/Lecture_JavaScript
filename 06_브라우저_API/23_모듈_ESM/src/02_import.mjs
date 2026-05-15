/**
 * 01_export.mjs에서 가져와 사용
 */
import multiply, { PI, add } from './01_export.mjs';

console.log('PI:', PI);
console.log('1+2 =', add(1, 2));
console.log('3*4 =', multiply(3, 4));
