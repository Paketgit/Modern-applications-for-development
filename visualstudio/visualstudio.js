let openTabs = new Set(['Visual Studio', 'about']);
let closedTabs = new Set();

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeFileSystem();
    initializeSidebar();
    initializeMobileMenu();
    updateStatusBar();
});

// Инициализация вкладок
function initializeTabs() {
    // Обработчики для вкладок
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function(e) {
            if (!e.target.classList.contains('tab-close')) {
                switchToTab(this.dataset.tab);
            }
        });
    });

    // Обработчики для закрытия вкладок
    document.querySelectorAll('.tab-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const tab = this.parentElement;
            const tabId = tab.dataset.tab;
            closeTab(tabId);
        });
    });
}

// Инициализация файловой системы
function initializeFileSystem() {
    // Обработчики для файлов
    document.querySelectorAll('.file').forEach(file => {
        file.addEventListener('click', function() {
            const fileId = this.dataset.file;
            openFile(fileId);
        });
    });

    // Обработчики для папок
    document.querySelectorAll('.folder').forEach(folder => {
        folder.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
}

// Инициализация боковой панели
function initializeSidebar() {
    document.querySelectorAll('.sidebar-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const panel = this.dataset.panel;
            switchPanel(panel);
        });
    });

    // Закрытие панелей
    document.querySelectorAll('.panel-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const panel = this.closest('.solution-explorer');
            panel.classList.remove('active-panel');
        });
    });
}

// Инициализация мобильного меню
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('mobile-open');
        });
    }
}

// Переключение между вкладками
function switchToTab(tabId) {
    // Скрыть все вкладки
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Убрать активный класс со всех вкладок
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Показать выбранную вкладку
    const targetTab = document.querySelector(`[data-tab="${tabId}"]`);
    const targetContent = document.getElementById(`tab-content-${tabId}`);
    
    if (targetTab && targetContent) {
        targetTab.classList.add('active');
        targetContent.classList.add('active');
        targetContent.classList.add('fade-in');
        
        // Обновить статус файла в обозревателе
        updateFileSelection(tabId);
        
        // Обновить строку состояния
        updateStatusBar();
        
        // Убрать анимацию после завершения
        setTimeout(() => {
            targetContent.classList.remove('fade-in');
        }, 300);
    }
}

// Закрытие вкладки
function closeTab(tabId) {
    const tab = document.querySelector(`[data-tab="${tabId}"]`);
    const content = document.getElementById(`tab-content-${tabId}`);
    
    if (tab && content) {
        // Если закрываемая вкладка активна, переключиться на другую
        if (tab.classList.contains('active')) {
            const remainingTabs = Array.from(document.querySelectorAll('.tab:not([data-tab="' + tabId + '"])'));
            if (remainingTabs.length > 0) {
                const nextTab = remainingTabs[0];
                switchToTab(nextTab.dataset.tab);
            }
        }
        
        // Скрыть вкладку и содержимое
        tab.style.display = 'none';
        content.classList.remove('active');
        
        // Удалить из открытых вкладок, добавить в закрытые
        openTabs.delete(tabId);
        closedTabs.add(tabId);
    }
}

// Открытие файла
function openFile(fileId) {
    // Обновить выделение в обозревателе
    document.querySelectorAll('.file').forEach(file => {
        file.classList.remove('active');
    });
    document.querySelector(`[data-file="${fileId}"]`).classList.add('active');
    
    // Если вкладка уже открыта, просто переключиться на нее
    if (openTabs.has(fileId)) {
        switchToTab(fileId);
        return;
    }
    
    // Если вкладка была закрыта ранее, показать ее
    if (closedTabs.has(fileId)) {
        const tab = document.querySelector(`[data-tab="${fileId}"]`);
        if (tab) {
            tab.style.display = 'flex';
            closedTabs.delete(fileId);
            openTabs.add(fileId);
            switchToTab(fileId);
        }
        return;
    }
    
    // Создать новую вкладку (для файлов, у которых нет готовой вкладки)
    createTab(fileId);
}

// Создание новой вкладки
function createTab(fileId) {
    // В реальном приложении здесь была бы загрузка содержимого файла
    console.log(`Creating tab for file: ${fileId}`);
    
    // Добавить в открытые вкладки
    openTabs.add(fileId);
    
    // Переключиться на вкладку (если она уже существует в DOM)
    const existingTab = document.querySelector(`[data-tab="${fileId}"]`);
    if (existingTab) {
        existingTab.style.display = 'flex';
        switchToTab(fileId);
    }
}

// Обновление выделения файла в обозревателе
function updateFileSelection(tabId) {
    document.querySelectorAll('.file').forEach(file => {
        file.classList.remove('active');
        if (file.dataset.file === tabId) {
            file.classList.add('active');
        }
    });
}

// Переключение панелей
function switchPanel(panelId) {
    // Обновить активную иконку
    document.querySelectorAll('.sidebar-icon').forEach(icon => {
        icon.classList.remove('active');
    });
    document.querySelector(`[data-panel="${panelId}"]`).classList.add('active');
    
    // Показать соответствующую панель
    if (panelId === 'explorer') {
        document.querySelector('.solution-explorer').classList.add('active-panel');
    }
}

// Обновление строки состояния
function updateStatusBar() {
    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        const fileName = activeTab.textContent.replace('×', '').trim();
        document.querySelector('.statusbar div:first-child').textContent = `${fileName} - Готово`;
    }
}


