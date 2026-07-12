import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test suite: Format currency');

console.log('converts sents into dollars');
formatCurrency(2095) === '20.95' ? console.log('passed') : console.log('failed');

console.log('works with 0');
formatCurrency(0) === '0.00' ? console.log('passed') : console.log('failed');

console.log('rounds-up to the nearest cent');
formatCurrency(2000.5) === '20.01' ? console.log('passed') : console.log('failed');