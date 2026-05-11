// Import helpers using full require() style
const helpers = require('./utils/helpers');
console.log('=== Testing Helper Functions ===\n');

// Test Function 1: greet()
console.log(helpers.greet("Thabo"));

// Test Function 2: calculateAge()
console.log(helpers.calculateAge(2000));

// Test Function 3: formatCurrency()
console.log(helpers.formatCurrency(1500));


// Import helpers using destructuring
const { greet, calculateAge, formatCurrency } = require('./utils/helpers');
console.log('\n--- Testing Destructured Imports ---\n');

console.log(greet("Amara"));
console.log(calculateAge(1995));
console.log(formatCurrency(25000));

console.log('\n All functions executed successfully \n')
