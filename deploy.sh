#!/bin/bash

# Thuraya Chocolate Deployment Script
# This script prepares the project for deployment to Hostinger

echo "🚀 Starting deployment preparation..."

# Step 1: Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf out

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 3: Build the project
echo "🔨 Building the project..."
npm run build

# Step 4: Create deployment package
echo "📦 Creating deployment package..."

# Create a temporary directory for deployment files
mkdir -p deploy-package

# Copy necessary files
echo "📋 Copying files..."
cp -r .next deploy-package/
cp -r public deploy-package/
cp package.json deploy-package/
cp package-lock.json deploy-package/
cp next.config.ts deploy-package/
cp tsconfig.json deploy-package/
cp tailwind.config.ts deploy-package/
cp postcss.config.mjs deploy-package/
cp .htaccess deploy-package/
cp ecosystem.config.js deploy-package/

# Create logs directory
mkdir -p deploy-package/logs

# Create a README for deployment
cat > deploy-package/DEPLOY_README.md << 'EOF'
# Deployment Instructions

## On Hostinger Server:

1. Upload all files to your public_html directory
2. SSH into your server
3. Run the following commands:

```bash
cd public_html
npm install --production
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## To update the application:

```bash
pm2 restart thuraya-chocolate
```

## To view logs:

```bash
pm2 logs thuraya-chocolate
```
EOF

# Create ZIP file
echo "🗜️ Creating ZIP file..."
cd deploy-package
zip -r ../thuraya-chocolate-deployment.zip .
cd ..

# Clean up
rm -rf deploy-package

echo "✅ Deployment package created: thuraya-chocolate-deployment.zip"
echo ""
echo "📤 Next steps:"
echo "1. Upload thuraya-chocolate-deployment.zip to Hostinger File Manager"
echo "2. Extract the ZIP file in your public_html directory"
echo "3. SSH into your server and run: npm install --production"
echo "4. Start the application with: pm2 start ecosystem.config.js"
echo ""
echo "🎉 Done!"
