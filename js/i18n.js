/**
 * Internationalization (i18n) Support
 * Multilingual support for TrustWatch
 */

const translations = {
    english: {
        app_name: 'TrustWatch',
        tagline: 'Real-Time AI Phishing Detection',
        scan_now: 'Scan Now',
        home: 'Home',
        dashboard: 'Dashboard',
        // Add more translations as needed
    },
    hindi: {
        app_name: 'ट्रस्टवॉच',
        tagline: 'रीयल-टाइम एआई फ़िशिंग डिटेक्शन',
        scan_now: 'अभी स्कैन करें',
        home: 'होम',
        dashboard: 'डैशबोर्ड',
        // Add more translations
    },
    tamil: {
        app_name: 'டிரஸ்ட்வாட்ச்',
        tagline: 'நேரடி AI ஃபிஷிங் கண்டறிதல்',
        scan_now: 'இப்போது ஸ்கேன் செய்க',
        home: 'முகப்பு',
        dashboard: 'டாஷ்போர்டு',
        // Add more translations
    },
    telugu: {
        app_name: 'ట్రస్ట్‌వాచ్',
        tagline: 'రియల్-టైమ్ AI ఫిషింగ్ డిటెక్షన్',
        scan_now: 'ఇప్పుడు స్కాన్ చేయండి',
        home: 'హోమ్',
        dashboard: 'డాష్‌బోర్డ్',
        // Add more translations
    }
};

// Get current language from localStorage or default to English
let currentLanguage = localStorage.getItem('language') || 'english';

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageText();
}

// Update page text based on current language
function updatePageText() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', function () {
    updatePageText();
});
