document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const sidebarIcons = document.querySelectorAll('.sidebar-icon');
    const pages = document.querySelectorAll('.page');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menuBar = document.querySelector('.menu-bar');
    const sidebar = document.querySelector('.sidebar');

    function switchTab(tabName) {
        tabs.forEach(tab => tab.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
        
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.querySelector(`#${tabName}-page`).classList.add('active');
    }

    function switchPage(pageName) {
        sidebarIcons.forEach(icon => icon.classList.remove('active'));
        document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
        
        switchTab('welcome');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    sidebarIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const pageName = this.getAttribute('data-page');
            switchPage(pageName);
        });
    });

    mobileMenuBtn.addEventListener('click', function() {
        menuBar.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-bar') && !event.target.closest('.mobile-menu-btn')) {
            menuBar.classList.remove('active');
        }
    });

    window.showHomePage = function() {
        location = "../index.html"
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuBar.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
});