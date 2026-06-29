// Kiểm tra khi vừa tải trang
window.onload = () => {
    if (localStorage.getItem('ritco_user')) {
        showLayer('dashboard-layer');
    }
};

function showLayer(id) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function loginWithEmail() {
    const email = document.getElementById('email-input').value;
    if(email) {
        showLayer('create-name-layer');
    } else {
        alert("Bạn phải nhập Email!");
    }
}

function finishSetup() {
    const name = document.getElementById('username').value;
    if(name) {
        localStorage.setItem('ritco_user', name);
        showLayer('dashboard-layer');
    }
}

function logout() {
    localStorage.removeItem('ritco_user');
    location.reload();
}
