// Loader.js
const files = ['main.js', 'auth.js', 'editor.js', 'game.js', 'network.js'];
files.forEach(file => {
    let script = document.createElement('script');
    script.src = file;
    document.head.appendChild(script);
});
