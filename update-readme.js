const fs = require('fs');
const { execSync } = require('child_process');

// Read the coverage summary
const coverageSummary = JSON.parse(
  fs.readFileSync('./coverage/coverage-summary.json', 'utf8')
);

// Calculate the coverage percentage
const coveragePercentage = coverageSummary.total.statements.pct;

// Generate the badge URL
const badgeUrl = `https://img.shields.io/badge/coverage-${coveragePercentage}%25-green`;

// Read the README.md
let readmeContent = fs.readFileSync('./README.md', 'utf8');

// Replace the existing badge URL with the new one
readmeContent = readmeContent.replace(
  /https:\/\/img\.shields\.io\/badge\/coverage-\d+%25-green/g,
  badgeUrl
);

// Write the updated content back to README.md
fs.writeFileSync('./README.md', readmeContent);

console.log(`Updated README.md with coverage badge: ${badgeUrl}`);
