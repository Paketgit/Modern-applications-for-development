document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const tryDemo = document.getElementById('tryDemo');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        themeToggle.textContent = document.body.classList.contains('dark') ? 'Светлая' : 'Тёмная';
    });
    
    tryDemo.addEventListener('click', function() {
        alert('Демо-режим Figma активирован.');
    });
    
});