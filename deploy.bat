@echo off
REM Thuraya Chocolate Deployment Script for Windows
REM This script prepares the project for deployment to Hostinger

echo.
echo ========================================
echo   Thuraya Chocolate Deployment
echo ========================================
echo.

echo [1/5] Cleaning previous builds...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out
if exist deploy-package rmdir /s /q deploy-package
if exist thuraya-chocolate-deployment.zip del thuraya-chocolate-deployment.zip

echo [2/5] Installing dependencies...
call npm install

echo [3/5] Building the project...
call npm run build

echo [4/5] Creating deployment package...
mkdir deploy-package
mkdir deploy-package\logs

echo [5/5] Copying files...
xcopy /E /I /Y .next deploy-package\.next
xcopy /E /I /Y public deploy-package\public
copy package.json deploy-package\
copy package-lock.json deploy-package\
copy next.config.ts deploy-package\
copy tsconfig.json deploy-package\
copy tailwind.config.ts deploy-package\
copy postcss.config.mjs deploy-package\
copy .htaccess deploy-package\
copy ecosystem.config.js deploy-package\

echo.
echo ========================================
echo   Package Created Successfully!
echo ========================================
echo.
echo Files are ready in: deploy-package\
echo.
echo Next Steps:
echo 1. Compress the 'deploy-package' folder to ZIP
echo 2. Upload to Hostinger File Manager
echo 3. Extract in public_html directory
echo 4. SSH and run: npm install --production
echo 5. Start with: pm2 start ecosystem.config.js
echo.
echo Press any key to open the deploy-package folder...
pause > nul
explorer deploy-package
