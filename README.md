# TrustWatch Frontend – Phishing Detection UI

TrustWatch Frontend is the user interface of the TrustWatch phishing detection system.  
It is built using **HTML, CSS, and JavaScript** and provides screens for scanning URLs, emails, and SMS messages.

This repository contains **frontend code only**.  
Backend APIs are maintained in a separate repository.

---

## 🌟 Features
- Clean and responsive UI
- URL, Email, and SMS scanning screens
- User authentication pages (login, signup, verify)
- Dashboard and notifications pages
- Settings and subscription pages
- Designed for desktop and mobile browsers

---

## 🏗️ Frontend Project Structure

trustwatch-frontend/
├── assets/ # Images and icons
├── css/ # Stylesheets
├── js/ # JavaScript logic
├── index.html # Landing page
├── login.html # Login screen
├── signup.html # Signup screen
├── verify.html # OTP verification
├── dashboard.html # User dashboard
├── scan.html # Phishing scan page
├── notifications.html # Alerts & notifications
├── settings.html # User settings
├── subscription.html # Subscription page
├── splash.html # Splash screen


---

## 🧰 Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## ▶️ How to Run Frontend

### Method 1: Open Directly
Simply open `index.html` in a web browser.

### Method 2: Using Local Server (Recommended)
```bash
python -m http.server 8000
Then open:

http://localhost:8000


🔗 Backend Connection
This frontend communicates with the backend using REST APIs.

Make sure backend is running at:
http://localhost:5000

API URLs are configured inside JavaScript files.

📌 Notes
This frontend is framework-free (no React/Angular)

Backend must be running for scan features to work

Designed for educational and demonstration purposes

📝 License
Educational use only.

---

## 🪜 HOW TO PUSH README TO GITHUB

After creating `README.md`:

```bat
git add README.md
git commit -m "Add frontend README"
git push







