# Postman Installation Guide (Linux)

This guide provides step-by-step instructions to install and set up the latest **stable version of Postman** on a Debian-based Linux system using the terminal.

---

## 📦 Installation Steps

### 1. Open a Terminal
Launch your terminal from the applications menu or press `Ctrl+Alt+T`.

---

### 2. Add the Postman Repository

```bash
sudo sh -c 'echo "deb https://dl.pstmn.io/download/latest/linux64" > /etc/apt/sources.list.d/postman.list'
```

This command adds the Postman package source to your system's list of APT repositories.

---

### 3. Import the Postman GPG Key

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
```

This ensures that your system can verify the authenticity of the Postman package.

---

### 4. Update the Package List

```bash
sudo apt-get update
```

Refreshes your package manager's index to recognize the new Postman repository.

---

### 5. Install Postman

```bash
sudo apt-get install postman
```

This command installs the latest stable version of Postman on your system.

---

## ✅ Post-Installation

Once installed, you can launch Postman via the application menu or by typing:

```bash
postman
```

into your terminal.

---

## 📝 Notes

- This guide is tailored for Debian-based systems like **Ubuntu**.
- For other distributions, consider using the [Postman Snap package](https://snapcraft.io/postman) or downloading from the [official website](https://www.postman.com/downloads/).

---

## 🔗 Resources

- [Official Postman Download Page](https://www.postman.com/downloads/)
- [Postman Documentation](https://learning.postman.com/)

---