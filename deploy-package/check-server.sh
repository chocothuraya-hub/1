#!/bin/bash

echo "=========================================="
echo "  Hostinger Server Requirements Check"
echo "=========================================="
echo ""

# Check Node.js version
echo "1. Checking Node.js version..."
if command -v node &> /dev/null
then
    NODE_VERSION=$(node -v)
    echo "✅ Node.js is installed: $NODE_VERSION"
    
    # Extract major version number
    MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'v' -f2 | cut -d'.' -f1)
    
    if [ "$MAJOR_VERSION" -ge 18 ]; then
        echo "✅ Node.js version is 18 or higher - GOOD!"
    else
        echo "❌ Node.js version is less than 18 - UPGRADE REQUIRED!"
        echo "   Current: v$MAJOR_VERSION"
        echo "   Required: v18 or higher"
    fi
else
    echo "❌ Node.js is NOT installed!"
    echo "   Please install Node.js 18 or higher"
fi

echo ""

# Check npm
echo "2. Checking npm..."
if command -v npm &> /dev/null
then
    NPM_VERSION=$(npm -v)
    echo "✅ npm is installed: v$NPM_VERSION"
else
    echo "❌ npm is NOT installed!"
fi

echo ""

# Check PM2
echo "3. Checking PM2..."
if command -v pm2 &> /dev/null
then
    PM2_VERSION=$(pm2 -v)
    echo "✅ PM2 is installed: v$PM2_VERSION"
else
    echo "❌ PM2 is NOT installed!"
    echo "   Install with: npm install -g pm2"
fi

echo ""

# Check port 3000
echo "4. Checking if port 3000 is available..."
if command -v lsof &> /dev/null
then
    PORT_CHECK=$(lsof -i :3000 2>/dev/null)
    if [ -z "$PORT_CHECK" ]; then
        echo "✅ Port 3000 is available"
    else
        echo "⚠️  Port 3000 is already in use:"
        echo "$PORT_CHECK"
    fi
elif command -v netstat &> /dev/null
then
    PORT_CHECK=$(netstat -tuln | grep :3000)
    if [ -z "$PORT_CHECK" ]; then
        echo "✅ Port 3000 is available"
    else
        echo "⚠️  Port 3000 is already in use"
    fi
else
    echo "⚠️  Cannot check port availability (lsof/netstat not found)"
fi

echo ""

# Check current directory
echo "5. Current directory:"
pwd

echo ""

# Check if package.json exists
echo "6. Checking for package.json..."
if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json NOT found in current directory"
fi

echo ""

# Check if .next directory exists
echo "7. Checking for .next build directory..."
if [ -d ".next" ]; then
    echo "✅ .next directory found"
else
    echo "❌ .next directory NOT found - build required"
fi

echo ""

# Check available memory
echo "8. Checking available memory..."
if command -v free &> /dev/null
then
    free -h
else
    echo "⚠️  Cannot check memory (free command not found)"
fi

echo ""

# Check disk space
echo "9. Checking disk space..."
df -h .

echo ""
echo "=========================================="
echo "  Check Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. If Node.js < 18: Contact Hostinger support to upgrade"
echo "2. If PM2 not installed: Run 'npm install -g pm2'"
echo "3. If port 3000 busy: Stop the service or use different port"
echo ""
