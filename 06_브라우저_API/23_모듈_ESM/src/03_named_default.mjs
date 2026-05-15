/**
 * named와 default를 함께 import / 별칭(alias) 사용
 */
import multiply, { add as plus, PI } from './01_export.mjs';
import * as math from './01_export.mjs';

console.log(plus(10, 20));
console.log(multiply(2, PI));
console.log('네임스페이스 사용:', math.add(5, 7));
