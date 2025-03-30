document.addEventListener('DOMContentLoaded', function() {
  // Initialize Particles.js
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { 
        enable: true, 
        distance: 150, 
        color: "#ffffff", 
        opacity: 0.4, 
        width: 1 
      },
      move: { 
        enable: true, 
        speed: 2, 
        direction: "none", 
        random: true, 
        straight: false, 
        out_mode: "out" 
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      }
    }



  });

  // Tab Switching Functionality
  const navLinks = document.querySelectorAll('.nav-link');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchTab(tabId) {
    tabContents.forEach(tab => tab.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.nav-link[data-tab="${tabId}"]`).classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const tabId = this.getAttribute('data-tab');
      switchTab(tabId);
      if (window.innerWidth <= 768) {
        document.querySelector('.nav-links').classList.remove('show');
      }
    });
  });

  // Name letter animation
  const letters = document.querySelectorAll('.letter');
  letters.forEach((letter, index) => {
    const line = letter.parentElement;
    const lineIndex = Array.from(line.parentElement.children).indexOf(line);
    letter.style.animationDelay = `${(index + lineIndex * 5) * 0.1}s`;
  });

  // Typing animation
  const typingText = document.querySelector('.typing-text');
  const textToType = "Engineering Physics | Machine Learning";
  let charIndex = 0;

  function type() {
    if (charIndex < textToType.length) {
      typingText.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
    }
  }

  setTimeout(type, letters.length * 100 + 300);

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');

  mobileMenuBtn.addEventListener('click', function() {
    navLinksContainer.classList.toggle('show');
  });

  // Project details toggle
  const toggleButtons = document.querySelectorAll('.toggle-details-btn');

// Project details toggle
document.querySelectorAll('.toggle-details-btn').forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.project-card');
    const details = this.nextElementSibling;
    const allCards = document.querySelectorAll('.project-card');
    
    // Close all other open cards first
    allCards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.querySelector('.project-details').classList.remove('active');
        otherCard.querySelector('.toggle-details-btn i').style.transform = 'rotate(0deg)';
      }
    });
    
    // Toggle current card
    details.classList.toggle('active');
    const icon = this.querySelector('i');
    icon.style.transform = details.classList.contains('active') 
      ? 'rotate(180deg)' 
      : 'rotate(0deg)';
  });
});

  // Make home tab active by default
  switchTab('home');
});