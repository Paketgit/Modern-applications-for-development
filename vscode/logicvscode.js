// Очень простой JS для переключения файлов в "редакторе"
// Я упростил намеренно, чтобы было похоже на работу ученика.
// Файлы хранятся в объекте files — как будто это мини-файловая система.

const files = {
  "index.html": `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>index.html</title>
  </head>
  <body>
    <h1>Привет из index.html</h1>
    <!-- комментарий -->
  </body>
</html>`,

  "styles.css": `/* styles.css */
body {
  background: #fff;
  color: #000;
}

`,

  "script.js": `// script.js
console.log("Привет из script.js");
function hello() {
  alert("Hello!");
}`,
    "content": `<style>
        * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    } 

    .page {
      max-width: 80%;
      margin: auto;
      background: #2e2e3a;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      padding: 20px;
    }

    h1, h2 {
    text-align: center;
    margin-bottom: 20px;
    }
      color: #0b63d6;
    }

    p {
      line-height: 1.6;
    }

    ul, ol {
      margin-left: 20px;
    }

    .note {
      background: #424252;
      border-left: 4px solid #0b63d6;
      padding: 10px;
      margin: 10px 0;
    }

    code {
      background: #0f1724;
      color: #e6eef8;
      padding: 2px 5px;
      border-radius: 4px;
      font-family: monospace;
    }

    pre {
      background: #0f1724;
      padding: 10px;
      border-radius: 6px;
    }

    a.button {
      display: inline-block;
      background: #0b63d6;
      color: white;
      text-decoration: none;
      padding: 10px 14px;
      border-radius: 6px;
      margin-top: 10px;
    }

    footer {
      margin-top: 20px;
      font-size: 13px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="page">
    <h1>Visual Studio Code</h1>Visual Studio Code (VS Code) — текстовый редактор, разработанный Microsoft для Windows, Linux и macOS. Позиционируется как «лёгкий» редактор кода для кроссплатформенной разработки веб- и облачных приложений. Включает в себя отладчик, инструменты для работы с Git, подсветку синтаксиса, IntelliSense и средства для рефакторинга. Имеет широкие возможности для кастомизации: пользовательские темы, сочетания клавиш и файлы конфигурации. Распространяется бесплатно, разрабатывается как программное обеспечение с открытым исходным кодом, но готовые сборки распространяются под проприетарной лицензией.
Visual Studio Code основан на Electron и реализуется через веб-редактор Monaco, разработанный для Visual Studio Online.<div class="note">Подходит для работы с HTML, CSS, JavaScript, Python, C++, Java и многими другими языками.</div>
    <h2>Основные возможности</h2><ul>
      <li>Подсветка синтаксиса и автодополнение.</li>
      <li>Встроенный терминал и отладчик.</li>
      <li>Тысячи расширений (плагинов).</li>
      <li>Настраиваемая тема оформления и сочетания клавиш.</li>
    </ul>
    <h2>Как начать</h2><ol>
    <li>Скачай VS Code с официального сайта.</li>
      <li>Установи и открой программу.</li>
      <li>Открой папку с проектом: <code>Файл → Открыть папку</code>.</li>
      <li>Добавь расширения через меню <code>Расширения</code>.</li>
    </ol><a class="button" href="https://code.visualstudio.com">
Официальный сайт VS Code
    </a>

    <h2>Полезные сочетания клавиш</h2>
    <pre>
Ctrl + P          — открыть файл
Ctrl + Shift + P  — командная палитра
Ctrl + '          — встроенный терминал
Ctrl + F          — поиск
Ctrl + K Ctrl + S — настройки клавиш
    </pre>
    <h2>Пример настройки</h2>
    <pre>
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true
}</pre>
    <footer>
      вставка в js 
    </footer>
  </div>
    `
};

const fileEls = document.querySelectorAll('.file');
const codeContent = document.getElementById('code-content');
const tab = document.querySelector('.tab');

function openFile(name) {

    if (!files[name]) {
        codeContent.textContent = '// Файл не найден';
        tab.textContent = name;
        return;
    }
    if (name === 'content'){
        codeContent.innerHTML = files[name];
        tab.textContent = name;
    }
    else{
        codeContent.textContent = files[name];
        tab.textContent = name;
    }

    fileEls.forEach(el => {
        if (el.getAttribute('data-file') === name) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

}

function returnToMain() {
    location = '../index.html';
}

function restorePage(){
    location ='../vscode/vscode.html'
}

openFile('content');