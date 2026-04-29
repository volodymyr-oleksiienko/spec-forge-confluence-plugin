const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const FRONTEND_REPO_PATH = path.join(__dirname, '../..', 'spec-forge-front');
const STATIC_DIR = path.join(__dirname, 'static');

async function sync() {
  console.log('Starting sync...');

  try {
    const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

    console.log(`Running: 'npm run build:forge:dev'`);
    execSync(`${npmCmd} run build:forge:dev`, {
      cwd: FRONTEND_REPO_PATH, 
      stdio: 'inherit' 
    });

    console.log('Cleaning static folder...');
    await fs.emptyDir(STATIC_DIR);

    console.log('Copying build files...');
    const distPath = path.join(FRONTEND_REPO_PATH, 'dist');
    await fs.copy(distPath, STATIC_DIR);

    console.log('Sync complete!');
  } catch (error) {
    console.error('Error during sync:', error.message);
    process.exit(1);
  }
}

sync();