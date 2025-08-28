#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create .env.local if it doesn't exist
const envLocalPath = path.join(process.cwd(), '.env.local');
const envExamplePath = path.join(process.cwd(), 'env.example');

if (!fs.existsSync(envLocalPath) && fs.existsSync(envExamplePath)) {
    console.log('📝 Creating .env.local from env.example...');
    fs.copyFileSync(envExamplePath, envLocalPath);
    console.log('✅ .env.local created successfully!');
    console.log('⚠️  Please update .env.local with your actual configuration values.');
} else if (fs.existsSync(envLocalPath)) {
    console.log('✅ .env.local already exists');
} else {
    console.log('⚠️  env.example not found. Please create .env.local manually.');
}

console.log('\n🚀 Ethereum Sepolia Faucet setup complete!');
console.log('📖 Check README.md for setup instructions.');
console.log('💡 Run "npm run dev" to start the development server.');
