# ✅ Quick Server Check - Hostinger

## Before uploading, verify these requirements:

### 1. Check Node.js Version (REQUIRED: v18+)

**Via Hostinger Control Panel:**
- Go to: `Advanced` → `Node.js`
- Check available version

**Via SSH:**
```bash
node -v
# Should show: v18.x.x or higher
```

**If version is less than 18:**
- Contact Hostinger support to upgrade
- Or use nvm:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

---

### 2. Check PM2 Installation

```bash
pm2 -v
```

**If not installed:**
```bash
npm install -g pm2
```

---

### 3. Check Port 3000 Availability

```bash
lsof -i :3000
# OR
netstat -tuln | grep 3000
```

**If port is busy:**
- Stop the service using it
- Or change port in `ecosystem.config.js`

---

### 4. Run Automated Check Script

After uploading files:

```bash
cd public_html
chmod +x check-server.sh
./check-server.sh
```

This will give you a complete report.

---

## ⚠️ Common Issues

### Issue: "Node.js version too old"
**Solution:** Contact Hostinger support or use nvm

### Issue: "PM2 command not found"
**Solution:** `npm install -g pm2`

### Issue: "Port 3000 already in use"
**Solution:** 
```bash
lsof -i :3000
kill -9 [PID]
```

### Issue: "Permission denied"
**Solution:**
```bash
chmod -R 755 public_html
```

---

## 📞 Hostinger Support

If you need help:
- Live Chat from Control Panel
- https://www.hostinger.com/contact

---

## ✅ Ready to Deploy?

If all checks pass, proceed with:
1. Upload `thuraya-chocolate-deployment.zip`
2. Extract to `public_html`
3. Run `npm install --production`
4. Run `pm2 start ecosystem.config.js`

Good luck! 🚀
