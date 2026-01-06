/**
 * Scanner JavaScript - Handles all scanning functionality
 */

// API Base URL
const API_URL = 'http://localhost:5000';

// Form submission handlers
document.addEventListener('DOMContentLoaded', function () {
    // URL Form
    const urlForm = document.getElementById('url-form');
    if (urlForm) {
        urlForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const url = document.getElementById('url-input').value;
            await scanURL(url);
        });
    }

    // Email Form
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const text = document.getElementById('email-input').value;
            const language = document.getElementById('email-language').value;
            await scanText(text, language);
        });
    }

    // SMS Form
    const smsForm = document.getElementById('sms-form');
    if (smsForm) {
        smsForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const text = document.getElementById('sms-input').value;
            const language = document.getElementById('sms-language').value;
            await scanSMS(text, language);
        });
    }
});

// Scan URL function
async function scanURL(url) {
    showLoading();
    hideResults();

    try {
        const response = await fetch(`${API_URL}/api/scan/url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: url })
        });

        if (!response.ok) {
            throw new Error('Scan failed');
        }

        const result = await response.json();
        displayResults(result);
    } catch (error) {
        console.error('Error scanning URL:', error);
        alert('Error scanning URL. Please make sure the backend server is running on http://localhost:5000');
    } finally {
        hideLoading();
    }
}

// Scan text/email function
async function scanText(text, language = 'english') {
    showLoading();
    hideResults();

    try {
        const response = await fetch(`${API_URL}/api/scan/text`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text, language: language })
        });

        if (!response.ok) {
            throw new Error('Scan failed');
        }

        const result = await response.json();
        displayResults(result);
    } catch (error) {
        console.error('Error scanning text:', error);
        alert('Error scanning text. Please make sure the backend server is running on http://localhost:5000');
    } finally {
        hideLoading();
    }
}

// Scan SMS function
async function scanSMS(text, language = 'english') {
    showLoading();
    hideResults();

    try {
        const response = await fetch(`${API_URL}/api/scan/sms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: text, language: language })
        });

        if (!response.ok) {
            throw new Error('Scan failed');
        }

        const result = await response.json();
        displayResults(result);
    } catch (error) {
        console.error('Error scanning SMS:', error);
        alert('Error scanning SMS. Please make sure the backend server is running on http://localhost:5000');
    } finally {
        hideLoading();
    }
}

// Display results
function displayResults(result) {
    const resultsDiv = document.getElementById('results');

    // Update threat score with animation
    const scoreValue = document.getElementById('score-value');
    const scoreCircle = document.getElementById('score-circle');

    // Animate score counting up
    animateScore(scoreValue, 0, Math.round(result.threat_score), 1000);

    // Set score circle color based on risk level
    const riskLevel = result.risk_level.toLowerCase();
    if (riskLevel === 'critical') {
        scoreCircle.style.backgroundColor = 'var(--critical-color)';
    } else if (riskLevel === 'high') {
        scoreCircle.style.backgroundColor = 'var(--danger-color)';
    } else if (riskLevel === 'medium') {
        scoreCircle.style.backgroundColor = 'var(--warning-color)';
    } else {
        scoreCircle.style.backgroundColor = 'var(--success-color)';
    }

    // Update risk level
    document.getElementById('risk-level').textContent = `Risk Level: ${result.risk_level}`;

    // Update risk badge
    const riskBadge = document.getElementById('risk-badge');
    riskBadge.textContent = result.risk_level;
    riskBadge.className = `risk-badge risk-${riskLevel}`;

    // Update recommendation
    document.getElementById('recommendation').textContent = result.recommendation;

    // Update response time and confidence
    document.getElementById('response-time').textContent = result.response_time_ms + 'ms';
    document.getElementById('confidence').textContent = result.confidence + '%';

    // Display indicators
    const indicatorsList = document.getElementById('indicators-list');
    indicatorsList.innerHTML = '';

    if (result.indicators && result.indicators.length > 0) {
        result.indicators.forEach(indicator => {
            const li = document.createElement('li');
            li.textContent = indicator;
            indicatorsList.appendChild(li);
        });
        document.getElementById('indicators-section').style.display = 'block';
    } else {
        document.getElementById('indicators-section').style.display = 'none';
    }

    // Display additional details
    const detailsContent = document.getElementById('details-content');
    detailsContent.innerHTML = '';

    if (result.details) {
        const detailsDiv = document.createElement('div');
        detailsDiv.style.backgroundColor = 'var(--bg-secondary)';
        detailsDiv.style.padding = 'var(--spacing-sm)';
        detailsDiv.style.borderRadius = 'var(--border-radius-sm)';
        detailsDiv.style.marginTop = 'var(--spacing-xs)';

        for (const [key, value] of Object.entries(result.details)) {
            const p = document.createElement('p');
            p.style.fontSize = '14px';
            p.style.marginBottom = 'var(--spacing-xs)';

            if (Array.isArray(value)) {
                p.innerHTML = `<strong>${key}:</strong> ${value.join(', ')}`;
            } else if (typeof value === 'object') {
                p.innerHTML = `<strong>${key}:</strong> ${JSON.stringify(value)}`;
            } else {
                p.innerHTML = `<strong>${key}:</strong> ${value}`;
            }

            detailsDiv.appendChild(p);
        }

        detailsContent.appendChild(detailsDiv);
        document.getElementById('details-section').style.display = 'block';
    } else {
        document.getElementById('details-section').style.display = 'none';
    }

    // Show results
    resultsDiv.classList.add('show');

    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Animate score counting
function animateScore(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.round(current);
    }, 16);
}

// Create confetti effect for safe results
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = (Math.random() * 0.5) + 's';

            document.body.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

// Show loading state with progress animation
function showLoading() {
    const loadingDiv = document.getElementById('loading');
    const progressBar = document.getElementById('progress-bar');

    loadingDiv.classList.add('show');

    // Animate progress bar
    if (progressBar) {
        progressBar.style.width = '0%';
        setTimeout(() => {
            progressBar.style.width = '30%';
        }, 100);
        setTimeout(() => {
            progressBar.style.width = '60%';
        }, 500);
        setTimeout(() => {
            progressBar.style.width = '90%';
        }, 1000);
    }
}

// Hide loading state
function hideLoading() {
    const loadingDiv = document.getElementById('loading');
    const progressBar = document.getElementById('progress-bar');

    // Complete progress bar
    if (progressBar) {
        progressBar.style.width = '100%';
    }

    setTimeout(() => {
        loadingDiv.classList.remove('show');
        if (progressBar) {
            progressBar.style.width = '0%';
        }
    }, 300);
}

// Hide results
function hideResults() {
    document.getElementById('results').classList.remove('show');
}

// Reset scan (for "Scan Another" button)
function resetScan() {
    hideResults();

    // Clear form inputs
    const urlInput = document.getElementById('url-input');
    const emailInput = document.getElementById('email-input');
    const smsInput = document.getElementById('sms-input');

    if (urlInput) urlInput.value = '';
    if (emailInput) emailInput.value = '';
    if (smsInput) smsInput.value = '';

    // Scroll to top of scan section
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
