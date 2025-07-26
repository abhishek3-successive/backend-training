<!-- Set up a stable LTS version of Node.js (optional if already set up).

Here are the steps to install the stable LTS version of Node.js:

Update Package Lists:  sudo apt update

Install Node.js:

sudo apt install curl

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

After running the setup script, you can install Node.js and npm:

 sudo apt install nodejs

Verify Installation

 node -v

   npm -v

Create a repository (named as backend-training) and generate a README.md file and write all the steps and details in this file. -->

# Backend Training

Welcome to the Backend Training repository! This guide will help you set up Node.js LTS (Long Term Support) on your system and get started with backend development.


## Prerequisites

Before installing Node.js, ensure you have:

- A Linux-based system (Ubuntu/Debian)
- Terminal access with sudo privileges
- Internet connection for downloading packages

## Node.js Installation

Follow these steps to install the stable LTS version of Node.js:

### Step 1: Update Package Lists

First, update your system's package lists to ensure you have the latest information about available packages:

```bash
sudo apt update
```

### Step 2: Install Required Dependencies

Install curl, which is needed to download the Node.js setup script:

```bash
sudo apt install curl
```

### Step 3: Add NodeSource Repository

Download and execute the NodeSource setup script for the LTS version:

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

**What this command does:**
- Downloads the official NodeSource setup script
- Configures the repository for the latest LTS version
- Updates your package manager with the new repository information

### Step 4: Install Node.js and npm

After running the setup script, install Node.js and npm:

```bash
sudo apt install nodejs
```

**Note:** This command installs both Node.js and npm (Node Package Manager) simultaneously.

## Verification

Verify that Node.js and npm have been installed correctly:

### Check Node.js Version

```bash
node -v
```

Expected output format: `v18.x.x` or `v20.x.x` (depending on current LTS version)

### Check npm Version

```bash
npm -v
```

Expected output format: `9.x.x` or `10.x.x` (depending on npm version)

## Project Setup

Now that Node.js is installed, you can start setting up your backend project:

### Initialize a New Node.js Project

```bash
# Create a new directory for your project
mkdir my-backend-project
cd my-backend-project

# Initialize a new Node.js project
npm init -y
```

### Create a Basic Server

Create a simple `server.js` file:

```javascript
// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello from your Node.js backend!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

### Run Your Server

```bash
# Run the server
node server.js

# Or use nodemon for development (auto-restart on changes)
npx nodemon server.js
```
