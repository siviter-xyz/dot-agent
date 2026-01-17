#!/usr/bin/env node

/**
 * Generate research file path for PSI workflow
 * Usage: node get-research-path.js <work-name>
 */

const path = require('path');
const os = require('os');

function getResearchPath(workName) {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  
  // Get repo name from current directory or use 'repo' as default
  const repoName = process.env.REPO_NAME || 'repo';
  
  const fileName = `${year}-${month}-${workName}.research.md`;
  const researchDir = path.join(os.homedir(), '.dot-agent', 'working-dir', repoName);
  const researchPath = path.join(researchDir, fileName);
  
  return researchPath;
}

if (require.main === module) {
  const workName = process.argv[2];
  if (!workName) {
    console.error('Usage: node get-research-path.js <work-name>');
    process.exit(1);
  }
  console.log(getResearchPath(workName));
}

module.exports = { getResearchPath };
