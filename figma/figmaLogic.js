document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const tryDemo = document.getElementById('tryDemo');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        themeToggle.textContent = document.body.classList.contains('dark') ? 'Светлая' : 'Тёмная';
    });
    
    tryDemo.addEventListener('click', function() {
        alert('Демо-режим Figma активирован! Это учебная симуляция.');
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card, .tool-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});