// Function 1 — greet(name)
function greet(name) {
  return `Hey ${name}! Welcome to TechNest Backend Engineering.`;
}

// Function 2 — calculateAge(birthYear)
function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

// Function 3 — formatCurrency(amount)
function formatCurrency(amount) {
  if (typeof amount !== 'number') {
    throw new TypeError('Amount must be a number');
  }
  return `R ${amount.toLocaleString("en-ZA", { minimumFractionDigits: 2 })}`;
}

module.exports = { greet, calculateAge, formatCurrency };