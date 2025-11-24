const files = {
  "index.html": `<pre class="code-highlight">
&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;index.html&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Привет из index.html&lt;/h1&gt;
    &lt;!-- комментарий --&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>`,

  "styles.css": `
  <pre class="code-highlight">
  /* styles.css */
body {
  background: #fff;
  color: #000;
}
</pre>
`,

  "script.js": `
  <pre class="code-highlight">
  // script.js
console.log("Привет из script.js");
function hello() {
  alert("Hello!");
}</pre>`,
    "content": `
    <h1>
    Visual Studio Code</h1>Visual Studio Code (VS Code) — текстовый редактор, разработанный Microsoft для Windows, Linux и macOS. Позиционируется как «лёгкий» редактор кода для кроссплатформенной разработки веб- и облачных приложений. Включает в себя отладчик, инструменты для работы с Git, подсветку синтаксиса, IntelliSense и средства для рефакторинга. Имеет широкие возможности для кастомизации: пользовательские темы, сочетания клавиш и файлы конфигурации. Распространяется бесплатно, разрабатывается как программное обеспечение с открытым исходным кодом, но готовые сборки распространяются под проприетарной лицензией.
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
    </ol><button class="btn slide" href="https://code.visualstudio.com">
Официальный сайт VS Code
    </button>
    <h2>Полезные сочетания клавиш</h2>
    <pre class="code-highlight">
Ctrl + P          — открыть файл
trl + Shift + P  — командная палитра
Ctrl + '          — встроенный терминал
Ctrl + F          — поиск
Ctrl + K Ctrl + S — настройки клавиш
</pre>
    <h2>Пример настройки</h2>
    <pre class="code-highlight">
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true
}
</pre>
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

    codeContent.innerHTML = files[name];
    tab.textContent = name;

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