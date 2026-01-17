#!/usr/bin/env node

/**
 * Display plan location to user
 * Usage: node show-plan-location.js <work-name>
 */

const { getPlanPath } = require('./get-plan-path');

if (require.main === module) {
  const workName = process.argv[2];
  if (!workName) {
    console.error('Usage: node show-plan-location.js <work-name>');
    process.exit(1);
  }
  
  const planPath = getPlanPath(workName);
  console.log('\n📋 Plan saved to:');
  console.log(planPath);
  console.log('\nYou can edit this plan file directly or ask me to refine it.\n');
}

module.exports = { showPlanLocation: (workName) => {
  const { getPlanPath } = require('./get-plan-path');
  const planPath = getPlanPath(workName);
  return `Plan saved to: ${planPath}`;
}};
