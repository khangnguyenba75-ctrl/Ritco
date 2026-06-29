window.onload = () => {
    if (localStorage.getItem('ritco_user')) {
        showLayer('dashboard-layer');
    } else {
        showLayer('login-layer');
    }
};

function showLayer(id) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function showCreateName() { showLayer('create-name-layer'); }

function finishSetup() {
    const name = document.getElementById('username').value;
    localStorage.setItem('ritco_user', name);
    showLayer('dashboard-layer');
}
