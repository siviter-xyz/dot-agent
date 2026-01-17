#!/usr/bin/env node

/**
 * Generate plan file path for PSI workflow
 * Usage: node get-plan-path.js <work-name>
 */

const path = require('path');
const os = require('os');

function getPlanPath(workName) {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  
  // Get repo name from current directory or use 'repo' as default
  const repoName = process.env.REPO_NAME || 'repo';
  
  const fileName = `${year}-${month}-${workName}.plan.md`;
  const planDir = path.join(os.homedir(), '.dot-agent', repoName);
  const planPath = path.join(planDir, fileName);
  
  return planPath;
}

if (require.main === module) {
  const workName = process.argv[2];
  if (!workName) {
    console.error('Usage: node get-plan-path.js <work-name>');
    process.exit(1);
  }
  console.log(getPlanPath(workName));
}

module.exports = { getPlanPath };
