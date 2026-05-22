// Shopping Cart Functions
let cart = [];

function addToCart(bookTitle) {
    cart.push(bookTitle);
    showNotification(`${bookTitle} has been added to your cart!`);
    console.log(`Cart: ${cart.length} item(s) - ${cart.join(', ')}`);
}

function showNotification(message) {
    // Create notification element
    let notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #2c3e50;
        color: white;
        padding: 12px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: fadeInOut 3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Contact Form Validation
function validateContactForm(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let subject = document.getElementById('subject').value;
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-msg').forEach(el => el.innerHTML = '');
    
    // Validate Name
    if (name === '') {
        document.getElementById('nameError').innerHTML = 'Please enter your name';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('nameError').innerHTML = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').innerHTML = 'Please enter your email';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate Subject
    if (subject === '') {
        alert('Please select a subject');
        isValid = false;
    }
    
    // Validate Message
    if (message === '') {
        document.getElementById('messageError').innerHTML = 'Please enter your message';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').innerHTML = 'Message must be at least 10 characters';
        isValid = false;
    }
    
    if (isValid) {
        document.getElementById('formSuccess').style.display = 'block';
        document.getElementById('contactForm').reset();
        setTimeout(() => {
            document.getElementById('formSuccess').style.display = 'none';
        }, 3000);
    }
    
    return false;
}

// Feedback Form Validation
function validateFeedbackForm(event) {
    event.preventDefault();
    
    let name = document.getElementById('fb-name').value.trim();
    let email = document.getElementById('fb-email').value.trim();
    let rating = document.getElementById('rating').value;
    let message = document.getElementById('fb-message').value.trim();
    let isValid = true;
    
    if (name === '') {
        alert('Please enter your name');
        isValid = false;
    } else if (email === '') {
        alert('Please enter your email');
        isValid = false;
    } else if (rating === '') {
        alert('Please select a rating');
        isValid = false;
    } else if (message === '') {
        alert('Please enter your feedback');
        isValid = false;
    }
    
    if (isValid) {
        document.getElementById('fbSuccess').style.display = 'block';
        document.getElementById('feedbackForm').reset();
        setTimeout(() => {
            document.getElementById('fbSuccess').style.display = 'none';
        }, 3000);
    }
    
    return false;
}

// Add CSS animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(20px); }
        15% { opacity: 1; transform: translateY(0); }
        85% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(style);

// Page load initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Pamela\'s Bookstore - Website Loaded');
    
    // Add active class to current navigation link
    let currentPage = window.location.pathname.split('/').pop();
    let navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        let linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.style.backgroundColor = '#e67e22';
            link.style.borderRadius = '4px';
        }
    });
});

// SIMPLE SLIDESHOW
let slideIndex = 0;
const images = [
    "academic.jpg",
    "childern.jpg", 
    "susan-q-yin-2JIvboGLeho-unsplash.jpg"
];

// Optional: Use placeholder images if real ones don't exist
// const images = [
//     "https://via.placeholder.com/1200x400/2c3e50/white?text=Book+Sale+40%+OFF",
//     "https://via.placeholder.com/1200x400/e67e22/white?text=Children+Books",
//     "https://via.placeholder.com/1200x400/27ae60/white?text=Mystery+Books"
// ];

function showSlide() {
    document.getElementById("slideImage").src = images[slideIndex];
    
    // Update active dot
    let dots = document.querySelectorAll(".dot");
    for(let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex].classList.add("active");
}

function nextSlide() {
    slideIndex++;
    if(slideIndex >= images.length) {
        slideIndex = 0;
    }
    showSlide();
}

function prevSlide() {
    slideIndex--;
    if(slideIndex < 0) {
        slideIndex = images.length - 1;
    }
    showSlide();
}

function goToSlide(index) {
    slideIndex = index;
    showSlide();
}

// Auto-play every 4 seconds
setInterval(nextSlide, 4000);

// Show first slide when page loads
showSlide();
