# TrustWatch Frontend – Smart Multilingual Phishing Detection UI

TrustWatch Frontend is the web-based user interface of the TrustWatch phishing detection system. It allows users to scan URLs, emails, and SMS messages for phishing threats using a clean, responsive, and multilingual interface.

This repository contains **frontend code only**. Backend APIs, databases, and detection logic are maintained in a separate repository.

---

## 🎯 Purpose of the Frontend

The frontend is responsible for:
- Collecting user input (URL, email text, SMS content)
- Sending scan requests to the backend API
- Displaying phishing detection results
- Providing dashboards and notifications
- Managing user authentication UI flows

---

## 🌟 Key Features

- Clean and minimalist user interface  
- URL, Email, and SMS phishing scan screens  
- Login, Signup, and OTP verification pages  
- Dashboard with scan results and statistics  
- Notifications, settings, and subscription pages  
- Multilingual UI support  
- Responsive design for desktop and mobile browsers  

---

## 🏗️ Frontend File Structure
trustwatch-frontend/
├── assets/ # Images and icons
├── css/ # Stylesheets
├── js/ # JavaScript logic and API calls 
├── index.html # Landing page
├── login.html # Login interface
├── signup.html # Signup interface
├── verify.html # OTP verification
├── dashboard.html # User dashboard
├── scan.html # Phishing scan page
├── notifications.html # Alerts page
├── settings.html # User settings
├── subscription.html # Subscription details
├── splash.html # Splash screen


---

## 🧰 Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  

No frontend frameworks are used to keep the UI lightweight and easy to understand.

---

## ▶️ How to Run the Frontend

### Option 1: Open Directly
Open `index.html` in any modern web browser (Chrome, Firefox, Edge).

### Option 2: Run Using a Local Server (Recommended)

```bash
python -m http.server 8000

Then open:
http://localhost:8000

🔗 Backend Integration
The frontend communicates with the backend using REST APIs.

Ensure the backend server is running at:
http://localhost:5000
All API calls are handled inside JavaScript files located in the js/ directory.

🔁 User Flow Overview
User opens the landing page

User logs in or signs up

User selects scan type (URL, Email, or SMS)

User submits content for scanning

Backend processes the request

Frontend displays threat score and risk level

User views scan history and notifications

🎨 Design Philosophy
Minimal and distraction-free layout

Clear typography for readability

Simple color palette

Consistent spacing and alignment

Focus on usability and accessibility

⚠️ Limitations
Frontend alone cannot detect phishing

Backend must be running for scan features

Internet connection required for API communication

📌 Usage Notes
Designed for educational and academic demonstration

Can be integrated with web or mobile applications

Backend APIs can be replaced without changing UI structure

📝 License
This project is intended for educational and demonstration purposes only.

Made with ❤️ for safer digital communication




