// 1. Kiểm tra mạng (Yêu cầu Wi-Fi của bạn)
window.addEventListener('offline', () => {
    alert("ERROR\nWi-fi Has Been Off.\nOpen Settings Wi-fi");
});

// 2. Load cấu hình từ config.yml (Dùng một biến giả định)
let config = { owner_email_hash: "a53f6b..." }; 

// 3. Script kiểm tra quyền Owner ẩn danh
async function checkAdminStatus(userEmail) {
    const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(userEmail));
    const hashArray = Array.from(new Uint8Array(hash));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (hashHex === config.owner_email_hash) {
        console.log("Quyền Owner đã kích hoạt!");
        document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'block');
    }
}

// 4. Script lưu game vào LocalStorage
function saveGame(data) {
    const project = {
        title: data.title,
        desc: data.desc,
        code: { html: data.html, css: data.css, js: data.js }
    };
    localStorage.setItem('ritco_save', JSON.stringify(project));
}

// 5. Script điều hướng trang (Back/Make Game)
function navigate(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(page).style.display = 'block';
}

// 6. Init khởi chạy
window.onload = () => {
    console.log("Ritco System Online.");
    // Kiểm tra nếu đã đăng nhập thì không hiện Login
    if(localStorage.getItem('ritco_user')) {
        navigate('dashboard');
    }
};
